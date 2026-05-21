#!/usr/bin/env bash
# exit on errors
set -o errexit

echo ">>> Installing Node dependencies..."
npm install

echo ">>> Ensuring pip is available..."
if ! command -v pip3 &> /dev/null
then
    echo ">>> pip3 not found! Downloading get-pip.py..."
    curl -sS https://bootstrap.pypa.io/get-pip.py | python3
fi

echo ">>> Installing Python dependencies..."
# Use break-system-packages in case Render is using Ubuntu 24 / Python 3.12+
python3 -m pip install --break-system-packages -r requirements.txt || python3 -m pip install -r requirements.txt

echo ">>> Downloading NLTK Data..."
python3 -m nltk.downloader -d /opt/render/nltk_data punkt punkt_tab stopwords || python3 -m nltk.downloader punkt punkt_tab stopwords

echo ">>> Generating Prisma Client..."
npx prisma generate

echo ">>> Build completed successfully!"
