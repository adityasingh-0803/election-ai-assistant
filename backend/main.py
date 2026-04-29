from fastapi import FastAPI
from routes import chat, quiz, process, timeline

app = FastAPI(title="Election AI Assistant")

app.include_router(chat.router, prefix="/chat")
app.include_router(quiz.router, prefix="/quiz")
app.include_router(process.router, prefix="/process")
app.include_router(timeline.router, prefix="/timeline")

@app.get("/")
def home():
    return {"message": "Election AI Assistant Running 🚀"}
