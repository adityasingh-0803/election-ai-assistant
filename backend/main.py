from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import chat, quiz

app = FastAPI(title="Election AI Assistant")

# ✅ CORS (required for React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Routes
app.include_router(chat.router, prefix="/chat")
app.include_router(quiz.router, prefix="/quiz")

# ✅ Root endpoint
@app.get("/")
def home():
    return {"message": "Election AI Assistant Running 🚀"}