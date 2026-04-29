from fastapi import APIRouter, Query
from models.nlp import ElectionChatbot

router = APIRouter()

# Initialize chatbot (loads FAQ data)
chatbot = ElectionChatbot("data/faqs.json")

@router.get("/")
def chat(query: str = Query(..., description="User query about elections")):
    """
    Chat endpoint for answering election-related queries
    """
    response = chatbot.get_response(query)
    
    return {
        "query": query,
        "response": response
    }