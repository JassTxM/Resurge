#!/usr/bin/env bash
# exit on errors
set -o errexit

echo ">>> Installing Node dependencies..."
npm install

echo ">>> Setting up Python virtual environment..."
python3 -m venv venv
source venv/bin/activate

echo ">>> Installing Python dependencies..."
pip install -r requirements.txt

echo ">>> Downloading NLTK Data..."
python -m nltk.downloader -d ./nltk_data punkt punkt_tab stopwords || true

echo ">>> Generating Prisma Client..."
npx prisma generate

echo ">>> Pushing Schema to PostgreSQL Database..."
npx prisma db push

echo ">>> Build completed successfully!"
