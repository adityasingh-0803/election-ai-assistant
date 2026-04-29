from fastapi import APIRouter
from models.nlp import ElectionChatbot

router = APIRouter()

chatbot = ElectionChatbot("backend/data/faqs.json")

@router.get("/")
def chat(query: str):
    response = chatbot.get_response(query)
    return {"response": response}
