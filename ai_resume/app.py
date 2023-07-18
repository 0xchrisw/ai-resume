from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
import uvicorn


app = FastAPI()

templates = Jinja2Templates(directory="templates")


@app.get("/", response_class=HTMLResponse)
def read_form(request: Request):
    return templates.TemplateResponse("form.html", {"request": request})



@app.post("/submit")
def handle_form(raw_html_data: str = Form(...)):
  # TODO: This is where the majority of processing will occur; e.g. extracting elements from the HTML, running NLP, etc.
  ...


def main():
    uvicorn.run(
        "ai_resume.app:main",
        host="0.0.0.0",
        port=5000,
        log_level="info"
    )


if __name__ == "__main__":
    main()