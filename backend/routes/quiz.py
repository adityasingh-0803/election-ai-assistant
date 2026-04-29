from fastapi import APIRouter
import json

router = APIRouter()

with open("data/quiz.json") as f:
    quiz_data = json.load(f)

@router.get("/")
def get_quiz():
    return quiz_data