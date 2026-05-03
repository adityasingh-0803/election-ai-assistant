

# 🗳️ Election AI Assistant

An AI-powered assistant that helps users understand the election process in an interactive and easy-to-follow way. The system combines a chatbot and a quiz module to improve learning and engagement.

---

## 🚀 Features

* 💬 **Chatbot Interface**
  Ask questions about elections (e.g., voting process, eligibility, EVM, etc.)

* 🧠 **Quiz Module**
  Test your knowledge with multiple-choice questions

* ⚡ **FastAPI Backend**
  Handles queries and serves quiz data

* 🎨 **React Frontend**
  Clean and user-friendly interface

* ☁️ **Cloud Deployment**
  Backend deployed on Render

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Backend:** FastAPI (Python)
* **Deployment:** Render (Backend), Netlify/Vercel (Frontend)
* **Libraries:** Axios, Uvicorn

---

## 📂 Project Structure

```
election-ai-assistant/
│
├── backend/
│   ├── main.py
│   ├── routes/
│   │   ├── chat.py
│   │   └── quiz.py
│   └── data/
│
├── frontend/
│   ├── src/
│   └── package.json
```

---

## 🌐 Live Demo

* 🔗 **Backend API:**
  https://election-ai-assistant-89e9.onrender.com

* 🔗 **Example API Call:**
  https://election-ai-assistant-89e9.onrender.com/chat/?query=EVM

---

## ▶️ How to Run Locally

### Backend

```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```
cd frontend
npm install
npm start
```

---

## 📌 How It Works

1. User enters a query in the chatbot
2. Backend processes the query using keyword matching
3. Returns relevant election-related response
4. Quiz module fetches questions from backend API

---

## 📊 Future Improvements

* NLP-based intent detection
* Multi-language support
* Voice assistant integration
* Advanced ML-based chatbot

---

## 👨‍💻 Author

**Aditya Singh**

---

## 📢 Note

A full UI demo of the project is included in the submission video.

---
