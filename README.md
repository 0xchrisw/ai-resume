# AI Resume
Leverage AI to help write and generate your resume

This is the repository that supports the [Heroku app](https://ai-resume-190f5163802b.herokuapp.com/).

## Setup
```bash
python -m venv venv
. venv/bin/activate
pip install --upgrade pip
pip install --editable .
```

## Running Locally
You can use the entrypoint command `ai-resume` from the command line, or run the following command:
```bash
uvicorn ai_resume.app:main --reload
```
