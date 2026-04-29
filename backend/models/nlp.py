import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

class ElectionChatbot:
    def __init__(self, faq_path):
        with open(faq_path, "r") as f:
            data = json.load(f)

        self.questions = [item["question"] for item in data]
        self.answers = [item["answer"] for item in data]

        self.vectorizer = TfidfVectorizer()
        self.question_vectors = self.vectorizer.fit_transform(self.questions)

    def get_response(self, user_query):
        user_vec = self.vectorizer.transform([user_query])
        similarity = cosine_similarity(user_vec, self.question_vectors)

        best_match_idx = similarity.argmax()
        score = similarity[0][best_match_idx]

        if score < 0.2:
            return "Sorry, I couldn't understand. Please ask about elections."

        return self.answers[best_match_idx]
