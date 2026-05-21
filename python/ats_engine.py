import sys
import json
import re
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import nltk
import os

nltk_data_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'nltk_data'))
nltk.data.path.append(nltk_data_dir)

from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
try:
    nltk.download('punkt', download_dir=nltk_data_dir, quiet=True)
    nltk.download('punkt_tab', download_dir=nltk_data_dir, quiet=True)
    nltk.download('stopwords', download_dir=nltk_data_dir, quiet=True)
except Exception:
    pass

def extract_text(file_path):
    text = ""
    try:
        if file_path.lower().endswith('.pdf'):
            try:
                import pypdf
                with open(file_path, 'rb') as f:
                    reader = pypdf.PdfReader(f)
                    for page in reader.pages:
                        extracted = page.extract_text()
                        if extracted:
                            text += extracted + "\n"
            except ImportError:
                return "ERROR: pypdf not installed."
        elif file_path.lower().endswith('.docx'):
            try:
                import docx
                doc = docx.Document(file_path)
                for para in doc.paragraphs:
                    text += para.text + "\n"
            except ImportError:
                return "ERROR: python-docx not installed."
        else:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                text = f.read()
    except Exception as e:
        return f"ERROR: Could not read file. Details: {str(e)}"
    
    if not text.strip():
        return "ERROR: Could not extract text from the file or the file is empty."
    return text

def analyze(resume_text, jd_text):
    if resume_text.startswith("ERROR:"):
        return {"error": resume_text}
    if not jd_text or not jd_text.strip():
        return {"error": "Job description is empty. Please provide a valid job description."}

    resume_text_lower = resume_text.lower()
    jd_text_lower = jd_text.lower()

    resume_indicators = [
        "education", "experience", "projects", "skills", "certifications",
        "work", "employment", "summary", "objective", "university", "college",
        "degree", "bachelor", "master", "phd", "gpa", "coursework", "accomplishments",
        "responsibilities", "technologies", "profile", "resume", "cv", "curriculum vitae"
    ]
    
    found_indicators = sum(1 for ind in resume_indicators if re.search(r'\b' + ind + r'\b', resume_text_lower))
    
    if found_indicators < 2:
        return {"error": "The uploaded file does not appear to be a valid resume. Please ensure you upload your CV/Resume."}

    # 1 & 6. N-grams and TF-IDF Similarity
    try:
        # Use ngram range 1,2 for better phrase matching semantics
        vectorizer_sim = TfidfVectorizer(ngram_range=(1, 2), stop_words='english')
        tfidf_matrix = vectorizer_sim.fit_transform([jd_text_lower, resume_text_lower])
        similarity_score = cosine_similarity(tfidf_matrix[0:1], tfidf_matrix[1:2])[0][0]
        similarityPct = int(similarity_score * 100)
    except Exception:
        similarityPct = 0

    # Extract keywords from JD using N-grams
    try:
        jd_vectorizer = TfidfVectorizer(ngram_range=(1, 3), stop_words='english', max_features=40)
        jd_vectorizer.fit([jd_text_lower])
        top_jd_keywords = jd_vectorizer.get_feature_names_out()
    except Exception:
        top_jd_keywords = []

    found_keywords = []
    missing_keywords = []
    
    for kw in top_jd_keywords:
        if kw in resume_text_lower:
            found_keywords.append(kw)
        else:
            missing_keywords.append(kw)
            
    if len(top_jd_keywords) == 0:
        keywordPct = 0
    else:
        keywordPct = int((len(found_keywords) / len(top_jd_keywords)) * 100)

    # 2. Skill Detection
    common_skills = [
        "python", "java", "c++", "c#", "javascript", "typescript", "php", "ruby", "go", "rust", "swift", "kotlin", "dart", "scala", "perl", "lua", "objective-c", "r", "matlab", "sas", "sql", "pl/sql", "t-sql", "shell", "bash", "powershell", "html", "css", "sass", "less", "xml", "json", "yaml", "markdown", "graphql", "rest api", "soap", "grpc",
        "react", "angular", "vue.js", "svelte", "ember.js", "backbone.js", "meteor", "next.js", "nuxt.js", "gatsby", "bootstrap", "tailwind css", "material-ui", "ant design", "chakra ui", "bulma", "foundation",
        "node.js", "express.js", "django", "flask", "fastapi", "spring boot", "asp.net", "laravel", "symfony", "ruby on rails", "gin", "echo", "fiber", "nestjs",
        "mysql", "postgresql", "oracle", "sql server", "sqlite", "mariadb", "mongodb", "cassandra", "couchbase", "couchdb", "dynamodb", "firebase", "firestore", "redis", "memcached", "neo4j", "arango db", "elasticsearch", "solr",
        "aws", "amazon web services", "azure", "google cloud platform", "gcp", "ibm cloud", "oracle cloud", "heroku", "digitalocean", "linode", "vercel", "netlify",
        "docker", "kubernetes", "helm", "terraform", "ansible", "chef", "puppet", "jenkins", "travis ci", "circleci", "gitlab ci", "github actions", "octopus deploy", "bamboo", "nagios", "prometheus", "grafana", "elk stack", "kibana", "logstash", "splunk", "datadog", "new relic", "appdynamics",
        "git", "github", "gitlab", "bitbucket", "svn", "subversion", "mercurial", "perforce",
        "machine learning", "deep learning", "artificial intelligence", "nlp", "natural language processing", "computer vision", "data science", "data analytics", "data mining", "data engineering", "tensorflow", "keras", "pytorch", "scikit-learn", "pandas", "numpy", "scipy", "matplotlib", "seaborn", "plotly", "hadoop", "spark", "kafka", "flume", "sqoop", "hive", "pig", "zookeeper", "databricks", "snowflake", "redshift", "bigquery",
        "agile", "scrum", "kanban", "waterfall", "lean", "saas", "paas", "iaas", "ci/cd", "tdd", "test driven development", "bdd", "behavior driven development", "oop", "object oriented programming", "functional programming", "microservices", "serverless", "restful architecture",
        "linux", "ubuntu", "centos", "debian", "red hat", "windows server", "macos", "ios", "android", "react native", "flutter", "xamarin", "ionic", "cordova",
        "jira", "confluence", "trello", "asana", "slack", "microsoft teams", "zoom",
        "photoshop", "illustrator", "figma", "sketch", "adobe xd", "invision", "zeplin",
        "selenium", "cypress", "jest", "mocha", "chai", "jasmine", "puppeteer", "playwright", "jmeter", "postman", "swagger", "openapi",
        "blockchain", "ethereum", "smart contracts", "solidity", "web3.js", "ethers.js", "bitcoin", "cryptography",
        "cybersecurity", "penetration testing", "ethical hacking", "vulnerability assessment", "owasp", "firewalls", "vpn", "ids/ips", "siem",
        "iot", "internet of things", "raspberry pi", "arduino", "mqtt",
        "ar/vr", "augmented reality", "virtual reality", "unity", "unreal engine",
        "crm", "salesforce", "hubspot", "erp", "sap", "oracle erp",
        "seo", "search engine optimization", "sem", "google analytics", "google ads",
        "project management", "product management", "business analysis", "systems analysis", "technical writing", "ui/ux design", "user research", "wireframing", "prototyping",
        "c", "assembly", "vb.net", "f#", "elixir", "erlang", "clojure", "haskell", "ocaml", "prolog", "lisp", "cobol", "fortran", "pascal", "ada", "abap", "delphi", "racket", "julia", "crystal", "nim", "haxe", "elm", "purescript", "reason",
        "webgl", "three.js", "d3.js", "chart.js", "highcharts", "leaflet", "mapbox",
        "webassembly", "wasm", "pwa", "progressive web apps", "spa", "single page applications", "mfe", "micro frontends",
        "rabbitmq", "activemq", "zeromq", "ibm mq", "celery", "sidekiq", "resque",
        "oauth", "openid connect", "saml", "jwt", "json web tokens", "auth0", "okta", "keycloak", "cognito",
        "graphql", "apollo", "relay", "prisma", "typeorm", "sequelize", "mongoose", "hibernate", "entity framework", "dapper", "sqlalchemy",
        "webpack", "rollup", "parcel", "vite", "esbuild", "babel", "grunt", "gulp",
        "nginx", "apache", "iis", "tomcat", "caddy", "traefik", "ha proxy",
        "virtualbox", "vmware", "vagrant", "wsl", "windows subsystem for linux",
        "stripe", "paypal", "braintree", "square", "adyen",
        "twilio", "sendgrid", "mailchimp", "mailgun",
        "socket.io", "websockets", "webrtc",
        "wordpress", "drupal", "joomla", "magento", "shopify", "woocommerce", "ghost", "strapi", "contentful", "sanity",
        "ffmpeg", "gstreamer", "opencv",
        "unity3d", "godot", "cocos2d", "phaser",
        "autocad", "solidworks", "matlab", "simulink", "ansys",
        "tcp/ip", "dns", "dhcp", "ftp", "ssh", "ssl/tls", "http/https", "smtp", "pop3", "imap",
        "etl", "extract transform load", "elt", "data warehousing", "data lakes", "data marts",
        "apache airflow", "luigi", "prefect", "dagster",
        "tableau", "power bi", "looker", "qlik", "metabase", "superset",
        "machine vision", "robotics", "ros", "robot operating system",
        "bioinformatics", "computational biology", "cheminformatics",
        "quantum computing", "qiskit", "cirq",
        "edge computing", "fog computing",
        "5g", "telecommunications", "networking", "routing", "switching",
        "vhdl", "verilog", "fpga", "asic",
        "embedded systems", "rtos", "real-time operating systems", "freertos", "vxworks", "qnx"
    ]
    
    jd_skills = [skill for skill in common_skills if re.search(r'\b' + re.escape(skill) + r'\b', jd_text_lower)]
    found_skills = [skill for skill in jd_skills if re.search(r'\b' + re.escape(skill) + r'\b', resume_text_lower)]
    missing_skills = [skill for skill in jd_skills if not re.search(r'\b' + re.escape(skill) + r'\b', resume_text_lower)]
    
    if len(jd_skills) == 0:
        skillPct = 100 # Default if no specific technical skills are found in JD
    else:
        skillPct = int((len(found_skills) / len(jd_skills)) * 100)

    # 3. Detect Resume Sections
    sections = ["education", "experience", "projects", "skills", "certifications"]
    found_sections = []
    missing_sections = []
    
    for sec in sections:
        if re.search(r'\b' + sec + r'\b', resume_text_lower):
            found_sections.append(sec)
        else:
            missing_sections.append(sec)
            
    sectionPct = int((len(found_sections) / len(sections)) * 100)

    # 4. Action Verbs
    action_verbs = [
        "developed", "built", "implemented", "optimized", "designed", "managed", 
        "led", "improved", "created", "spearheaded", "engineered", "orchestrated", 
        "architected", "delivered"
    ]
    
    found_verbs_count = 0
    weak_action_verbs = False
    for verb in action_verbs:
        if re.search(r'\b' + verb + r'\b', resume_text_lower):
            found_verbs_count += 1
            
    if found_verbs_count >= 5:
        actionVerbScore = 100
    else:
        actionVerbScore = int((found_verbs_count / 5) * 100)
        if actionVerbScore < 60:
            weak_action_verbs = True

    # 5. Formatting Analysis
    formattingPct = 100
    words = len(resume_text.split())
    formatting_issues = []
    
    if words < 300:
        formattingPct -= 20
        formatting_issues.append("Resume is too short (ideal is 300-900 words).")
    elif words > 900:
        formattingPct -= 15
        formatting_issues.append("Resume is too long (ideal is 300-900 words).")
        
    if not re.search(r'@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', resume_text):
        formattingPct -= 15
        formatting_issues.append("Missing email address.")
        
    if not re.search(r'\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', resume_text):
        formattingPct -= 10
        formatting_issues.append("Missing phone number.")
        
    if not re.search(r'\d{4}', resume_text):
        formattingPct -= 10
        formatting_issues.append("Missing dates/years for experience or education.")
        
    if not re.search(r'[\*\-•]', resume_text):
        formattingPct -= 10
        formatting_issues.append("Missing bullet points (use them to describe experience).")
        
    # Combine formatting and section completeness for the final formatting score
    formattingPct = int((formattingPct + sectionPct) / 2)
    formattingPct = max(0, min(100, formattingPct))

    # 7. Final ATS Score Formula
    matchPct = int(
        (keywordPct * 0.30) +
        (similarityPct * 0.25) +
        (skillPct * 0.20) +
        (formattingPct * 0.15) +
        (actionVerbScore * 0.10)
    )
    roadmap = []
    if missing_skills:
        roadmap.append(f"Missing recommended skills: {', '.join(missing_skills[:5])}")
    if missing_keywords:
        roadmap.append(f"Missing important keywords/phrases from JD: {', '.join(missing_keywords[:5])}")
    if missing_sections:
        roadmap.append(f"Missing recommended resume sections: {', '.join(missing_sections)}")
    if keywordPct < 50:
        roadmap.append("Low keyword density compared to the job description.")
    if similarityPct < 50:
        roadmap.append("Low semantic similarity. Try tailoring your phrasing closer to the JD.")
    if weak_action_verbs:
        roadmap.append("Weak action verbs. Start bullet points with strong verbs (e.g., Developed, Built, Optimized).")
    if formatting_issues:
        roadmap.extend(formatting_issues[:3])
        
    if not roadmap:
        roadmap.append("Excellent! Your resume is highly formatted, uses strong verbs, and matches the job well.")
    unique_keywords = list(set(found_keywords).union(set(found_skills)))
    # 8. Generate Detailed Review
    review_points = []
    if missing_skills:
        review_points.append("Your resume lacks some key technical skills mentioned in the job description.")
    if missing_keywords:
        review_points.append("Consider adding more relevant keywords to pass ATS filters effectively.")
    if formatting_issues:
        review_points.append("There are some formatting issues, such as missing contact info or bullet points, that need your attention.")
    if weak_action_verbs:
        review_points.append("Replace passive verbs with strong action verbs to make your experience stand out.")
    if similarityPct < 50:
        review_points.append("The overall content of your resume does not closely align with the job description.")
        
    if not review_points:
        review_text = "Overall, your resume is exceptionally well-tailored for this role! Great job on formatting, keyword usage, and highlighting relevant skills."
    else:
        review_text = " ".join(review_points)
    improvementScore = 100 - matchPct

    # Get explicitly missing skills for the new section
    missing_skills_list = missing_skills

    return {
        "matchPct": matchPct,
        "keywordPct": keywordPct,
        "formattingPct": formattingPct,
        "keywords": unique_keywords,
        "roadmap": roadmap,
        "review": review_text,
        "improvementScore": improvementScore,
        "missingSkills": missing_skills_list
    }

if __name__ == '__main__':
    try:
        if len(sys.argv) < 3:
            print(json.dumps({"error": "Missing arguments. Usage: python ats_engine.py <resume_path> <job_description>"}))
            sys.exit(1)
            
        resume_path = sys.argv[1]
        job_description = sys.argv[2]
        
        resume_content = extract_text(resume_path)
        result = analyze(resume_content, job_description)
        
        print(json.dumps(result))
    except Exception as e:
        import traceback
        print(json.dumps({
            "error": f"Internal Python Error: {str(e)}",
            "traceback": traceback.format_exc()
        }))
