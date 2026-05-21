import sys
import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# ─────────────────────────────────────────────
#  SCORING HELPERS
# ─────────────────────────────────────────────

def clamp(value, lo=0, hi=100):
    return max(lo, min(hi, value))

def bool_score(val, weight=10):
    """Return weight if val is True, else 0."""
    return weight if val else 0

def rating_to_pct(rating, max_rating=10):
    """Convert a 1-10 rating to 0-100 percentage."""
    return clamp(int((rating / max_rating) * 100))

def rating5_to_pct(rating, max_rating=5):
    return clamp(int((rating / max_rating) * 100))

# ─────────────────────────────────────────────
#  JOB FIT SCORE  (0–100)
#  Based on ATS-style comparison: resume skills vs job required skills
# ─────────────────────────────────────────────

def compute_job_fit(data):
    core_skills   = ' '.join(data.get('coreSkillsRequired', []))
    your_skills   = ' '.join(data.get('yourSkills', []))
    job_desc      = data.get('jobDescription', '')
    preparation   = data.get('preparationLevel', 1)

    # TF-IDF similarity between skills
    skill_sim = 0
    if core_skills.strip() and your_skills.strip():
        try:
            vec = TfidfVectorizer(ngram_range=(1, 2), stop_words='english')
            matrix = vec.fit_transform([core_skills.lower(), your_skills.lower()])
            skill_sim = float(cosine_similarity(matrix[0:1], matrix[1:2])[0][0]) * 100
        except Exception:
            skill_sim = 0

    # Keyword overlap count
    core_list = [s.lower().strip() for s in data.get('coreSkillsRequired', [])]
    your_list = [s.lower().strip() for s in data.get('yourSkills', [])]
    if core_list:
        overlap = sum(1 for s in core_list if s in your_list)
        keyword_match = (overlap / len(core_list)) * 100
    else:
        keyword_match = 50

    prep_score = rating5_to_pct(preparation)

    job_fit = clamp(int(
        (skill_sim       * 0.40) +
        (keyword_match   * 0.40) +
        (prep_score      * 0.20)
    ))
    return job_fit

# ─────────────────────────────────────────────
#  INTERVIEW PERFORMANCE SCORE (0–100)
# ─────────────────────────────────────────────

def compute_interview_performance(data):
    tech   = rating_to_pct(data.get('technicalSkillRating', 5))
    comm   = rating_to_pct(data.get('communicationRating', 5))
    behav  = rating_to_pct(data.get('behaviouralRating', 5))
    prob   = rating_to_pct(data.get('problemSolvingRating', 5))

    # Bonus/Penalty modifiers
    solved_map = {'Yes': 15, 'Partially': 5, 'No': -5}
    solved_bonus = solved_map.get(data.get('solvedQuestions', 'Partially'), 0)

    hints_penalty = -5 if data.get('neededHints') else 5
    star_bonus    = 5 if data.get('usedStarMethod') else 0
    explain_bonus = 5 if data.get('explainedClearly') else 0
    examples_bonus = 5 if data.get('usedRealExamples') else 0

    score = clamp(int(
        (tech  * 0.30) +
        (comm  * 0.25) +
        (behav * 0.20) +
        (prob  * 0.25) +
        solved_bonus + hints_penalty + star_bonus + explain_bonus + examples_bonus
    ))
    return score

# ─────────────────────────────────────────────
#  CONFIDENCE SCORE (0–100)
# ─────────────────────────────────────────────

def compute_confidence_score(data):
    confidence  = rating_to_pct(data.get('confidenceRating', 5))
    nervousness = rating_to_pct(data.get('nervousnessLevel', 5))
    self_rating = rating_to_pct(data.get('overallSelfRating', 5))

    # Invert nervousness (higher nervousness = lower confidence score)
    nervousness_inverted = 100 - nervousness
    panic_penalty = -10 if data.get('panickedAtAnyPoint') else 5

    score = clamp(int(
        (confidence           * 0.40) +
        (nervousness_inverted * 0.30) +
        (self_rating          * 0.30) +
        panic_penalty
    ))
    return score

# ─────────────────────────────────────────────
#  READINESS SCORE (0–100)
# ─────────────────────────────────────────────

def compute_readiness(data, confidence_score, comm_score):
    prep     = rating5_to_pct(data.get('preparationLevel', 1))
    mock_bonus = 10 if data.get('mockInterviewsDone') else 0
    follow_up_bonus = 5 if data.get('interviewerAskedFollowUps') else 0

    score = clamp(int(
        (prep            * 0.40) +
        (confidence_score * 0.30) +
        (comm_score       * 0.30) +
        mock_bonus + follow_up_bonus
    ))
    return score

# ─────────────────────────────────────────────
#  INDIVIDUAL SKILL PROFICIENCY (0–100 each)
# ─────────────────────────────────────────────

def compute_skill_proficiency(data):
    tech        = rating_to_pct(data.get('technicalSkillRating', 5))
    prob        = rating_to_pct(data.get('problemSolvingRating', 5))
    comm        = rating_to_pct(data.get('communicationRating', 5))
    behav       = rating_to_pct(data.get('behaviouralRating', 5))
    conf        = rating_to_pct(data.get('confidenceRating', 5))

    # Derived scores
    logical_thinking = clamp(int((tech * 0.5) + (prob * 0.5)))
    system_thinking  = clamp(int((tech * 0.6) + (prob * 0.4)))
    debugging        = clamp(int((tech * 0.4) + (prob * 0.4) + (
        10 if data.get('neededHints') == False else -5
    )))

    return {
        "problemSolving":      prob,
        "logicalThinking":     logical_thinking,
        "technicalKnowledge":  tech,
        "communication":       comm,
        "confidence":          conf,
        "systemThinking":      system_thinking,
        "debugging":           debugging,
        "behavioural":         behav,
    }

# ─────────────────────────────────────────────
#  EXPECTED SKILL SCORES (based on job & difficulty)
# ─────────────────────────────────────────────

def compute_expected_skills(data):
    difficulty_map = {'Easy': 55, 'Medium': 70, 'Hard': 85}
    base = difficulty_map.get(data.get('difficultyLevel', 'Medium'), 70)
    interview_type = data.get('interviewType', 'Mixed')

    # Adjust based on interview type
    if interview_type == 'Technical':
        expected = {
            "problemSolving": base + 10,
            "logicalThinking": base + 5,
            "technicalKnowledge": base + 15,
            "communication": base - 10,
            "confidence": base,
            "systemThinking": base + 5,
            "debugging": base + 10,
            "behavioural": base - 15,
        }
    elif interview_type == 'HR':
        expected = {
            "problemSolving": base - 20,
            "logicalThinking": base - 10,
            "technicalKnowledge": base - 25,
            "communication": base + 20,
            "confidence": base + 10,
            "systemThinking": base - 15,
            "debugging": base - 20,
            "behavioural": base + 25,
        }
    elif interview_type == 'Managerial':
        expected = {
            "problemSolving": base,
            "logicalThinking": base + 5,
            "technicalKnowledge": base - 10,
            "communication": base + 15,
            "confidence": base + 10,
            "systemThinking": base + 10,
            "debugging": base - 10,
            "behavioural": base + 20,
        }
    else:  # Mixed
        expected = {
            "problemSolving": base + 5,
            "logicalThinking": base,
            "technicalKnowledge": base + 5,
            "communication": base + 5,
            "confidence": base,
            "systemThinking": base,
            "debugging": base,
            "behavioural": base + 5,
        }

    # Clamp all values
    return {k: clamp(v) for k, v in expected.items()}

# ─────────────────────────────────────────────
#  SKILL DISTRIBUTION (Strong / Average / Weak)
# ─────────────────────────────────────────────

def compute_skill_distribution(proficiency):
    total = len(proficiency)
    strong  = sum(1 for v in proficiency.values() if v >= 70)
    average = sum(1 for v in proficiency.values() if 40 <= v < 70)
    weak    = sum(1 for v in proficiency.values() if v < 40)
    return {
        "strong":  round((strong  / total) * 100),
        "average": round((average / total) * 100),
        "weak":    round((weak    / total) * 100),
    }

# ─────────────────────────────────────────────
#  AI FEEDBACK GENERATION
# ─────────────────────────────────────────────

def generate_ai_feedback(data, scores, proficiency):
    job_fit       = scores['jobFitScore']
    perf          = scores['interviewPerformanceScore']
    conf          = scores['confidenceScore']
    readiness     = scores['readinessScore']
    overall_avg   = int((job_fit + perf + conf + readiness) / 4)

    outcome       = data.get('outcome', 'Awaiting')
    interview_type = data.get('interviewType', 'Mixed')
    company       = data.get('companyName', 'the company')
    job_title     = data.get('jobTitle', 'this role')

    # ── Summary
    if overall_avg >= 75:
        summary = (
            f"You demonstrated a strong overall performance for the {job_title} role at {company}. "
            f"Your {interview_type} interview showed solid command across most parameters, "
            f"with an average score of {overall_avg}/100. The outcome — {outcome} — reflects your current standing."
        )
    elif overall_avg >= 50:
        summary = (
            f"Your performance for the {job_title} role at {company} was moderate. "
            f"While some areas like communication or technical skills showed promise, "
            f"there are clear improvement areas that brought the average to {overall_avg}/100. "
            f"Outcome: {outcome}."
        )
    else:
        summary = (
            f"The interview for {job_title} at {company} revealed significant gaps across key dimensions. "
            f"With an average score of {overall_avg}/100 and outcome {outcome}, "
            f"a focused improvement plan is recommended before your next attempt."
        )

    # ── Strengths
    strengths = []
    if proficiency.get('communication', 0) >= 65:
        strengths.append("Strong communication skills — you articulated ideas clearly.")
    if proficiency.get('problemSolving', 0) >= 65:
        strengths.append("Problem-solving ability is above average for this interview level.")
    if proficiency.get('technicalKnowledge', 0) >= 65:
        strengths.append("Good technical foundation relevant to the job requirements.")
    if data.get('usedStarMethod'):
        strengths.append("Effective use of the STAR method in behavioural responses.")
    if data.get('usedRealExamples'):
        strengths.append("Used real-world examples to back up your answers — highly effective.")
    if data.get('mockInterviewsDone'):
        strengths.append("Prior mock interview practice contributed positively to your preparation.")
    if proficiency.get('confidence', 0) >= 65:
        strengths.append("Displayed confidence throughout the interview.")
    if not strengths:
        strengths.append("You completed the full interview process — persistence is a strength in itself.")

    # ── Areas of Concern
    concerns = []
    if proficiency.get('technicalKnowledge', 0) < 50:
        concerns.append("Technical knowledge scored below average — needs focused upskilling.")
    if proficiency.get('communication', 0) < 50:
        concerns.append("Communication clarity needs improvement — practice structured responses.")
    if data.get('panickedAtAnyPoint'):
        concerns.append("Reported panic during the interview — stress management techniques are recommended.")
    if data.get('neededHints'):
        concerns.append("Needed hints during problem-solving — independent debugging practice is key.")
    if proficiency.get('confidence', 0) < 50:
        concerns.append("Confidence level was low — consider regular mock interviews to build assurance.")
    if not data.get('usedStarMethod'):
        concerns.append("STAR method not used — structured behavioural responses can significantly improve HR rounds.")
    if data.get('preparationLevel', 1) < 3:
        concerns.append("Low preparation level — invest more time in pre-interview research and practice.")
    if not concerns:
        concerns.append("No critical concerns identified — minor refinements in pacing and examples may help.")

    # ── Improvement Suggestions
    suggestions = []
    if proficiency.get('technicalKnowledge', 0) < 60:
        suggestions.append("Strengthen core technical skills through structured learning (DSA, system design).")
    if not data.get('mockInterviewsDone'):
        suggestions.append("Schedule at least 3–5 mock interviews before your next real interview.")
    if data.get('neededHints'):
        suggestions.append("Practice solving problems independently under timed conditions.")
    if not data.get('usedStarMethod'):
        suggestions.append("Learn and apply the STAR method for all behavioural questions.")
    if data.get('panickedAtAnyPoint'):
        suggestions.append("Practice mindfulness and breathing techniques to manage interview anxiety.")
    if proficiency.get('communication', 0) < 60:
        suggestions.append("Work on verbal clarity — record yourself answering questions and review.")
    if not data.get('usedRealExamples'):
        suggestions.append("Prepare a bank of real-world examples from your experience to use in answers.")
    if data.get('preparationLevel', 1) < 3:
        suggestions.append("Research the company, role, and common interview questions thoroughly beforehand.")
    # Always add at least 4
    if len(suggestions) < 4:
        suggestions.append("Review this interview log regularly to track progress over time.")
    if len(suggestions) < 5:
        suggestions.append("Connect with professionals in your target role for informational interviews.")

    return {
        "summary":     summary,
        "strengths":   strengths[:6],
        "concerns":    concerns[:6],
        "suggestions": suggestions[:6],
    }

# ─────────────────────────────────────────────
#  MAIN ANALYSIS
# ─────────────────────────────────────────────

def analyze(data):
    # Compute KPI scores
    job_fit   = compute_job_fit(data)
    perf      = compute_interview_performance(data)
    conf_s    = compute_confidence_score(data)
    comm_pct  = rating_to_pct(data.get('communicationRating', 5))
    readiness = compute_readiness(data, conf_s, comm_pct)

    scores = {
        "jobFitScore":               job_fit,
        "interviewPerformanceScore": perf,
        "confidenceScore":           conf_s,
        "readinessScore":            readiness,
    }

    # Skill proficiency
    proficiency = compute_skill_proficiency(data)
    expected    = compute_expected_skills(data)
    distribution = compute_skill_distribution(proficiency)

    # AI feedback
    ai_feedback = generate_ai_feedback(data, scores, proficiency)

    # Overall score (used for bar chart)
    your_overall   = clamp(int((job_fit + perf + conf_s + readiness) / 4))
    # Expected score based on difficulty
    difficulty_map = {'Easy': 60, 'Medium': 72, 'Hard': 83}
    expected_overall = difficulty_map.get(data.get('difficultyLevel', 'Medium'), 72)

    return {
        "scores":          scores,
        "proficiency":     proficiency,
        "expectedSkills":  expected,
        "distribution":    distribution,
        "aiFeedback":      ai_feedback,
        "overallComparison": {
            "yourScore":      your_overall,
            "expectedScore":  expected_overall,
        }
    }

# ─────────────────────────────────────────────
#  ENTRY POINT
# ─────────────────────────────────────────────

if __name__ == '__main__':
    try:
        if len(sys.argv) < 2:
            print(json.dumps({"error": "Missing arguments. Usage: python interview_engine.py <json_data>"}))
            sys.exit(1)

        raw = sys.argv[1]
        data = json.loads(raw)
        result = analyze(data)
        print(json.dumps(result))
    except Exception as e:
        import traceback
        print(json.dumps({
            "error": f"Internal Python Error: {str(e)}",
            "traceback": traceback.format_exc()
        }))
