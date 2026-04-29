import React, { useState } from "react";
import axios from "axios";
import Quiz from "./Quiz";

function App() {
  const [mode, setMode] = useState("chat");
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    { type: "bot", text: "👋 Welcome! Ask me anything about elections." }
  ]);
  const [loading, setLoading] = useState(false);

  const sendQuery = async () => {
    if (!query.trim()) return;

    const userMessage = { type: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const res = await axios.get(
        `http://127.0.0.1:8001/chat/?query=${query}`
      );

      const botMessage = {
        type: "bot",
        text: res.data.response,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "⚠️ Backend not responding" },
      ]);
    }

    setLoading(false);
    setQuery("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🗳️ Election AI Assistant</h1>

      {/* 🔘 Mode Switch */}
      <div style={styles.toggle}>
        <button onClick={() => setMode("chat")} style={styles.toggleBtn}>
          💬 Chat
        </button>
        <button onClick={() => setMode("quiz")} style={styles.toggleBtn}>
          🎯 Quiz
        </button>
      </div>

      {/* 🔄 Mode Content */}
      {mode === "chat" ? (
        <>
          <div style={styles.chatBox}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={
                  msg.type === "user"
                    ? styles.userMessage
                    : styles.botMessage
                }
              >
                {msg.text}
              </div>
            ))}

            {loading && <p style={{ textAlign: "center" }}>⏳ Thinking...</p>}
          </div>

          <div style={styles.inputArea}>
            <input
              type="text"
              placeholder="Ask about elections..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendQuery();
              }}
              style={styles.input}
            />

            <button
              onClick={sendQuery}
              style={styles.button}
              disabled={loading}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </>
      ) : (
        <Quiz />
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "white",
    padding: "20px",
  },
  title: {
    marginBottom: "10px",
  },
  toggle: {
    marginBottom: "10px",
  },
  toggleBtn: {
    marginRight: "10px",
    padding: "8px 15px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
  },
  chatBox: {
    width: "400px",
    height: "400px",
    background: "white",
    color: "black",
    borderRadius: "10px",
    padding: "10px",
    overflowY: "auto",
    marginBottom: "10px",
    display: "flex",
    flexDirection: "column",
  },
  userMessage: {
    alignSelf: "flex-end",
    margin: "5px",
    background: "#667eea",
    color: "white",
    padding: "8px",
    borderRadius: "10px",
    maxWidth: "70%",
  },
  botMessage: {
    alignSelf: "flex-start",
    margin: "5px",
    background: "#e5e7eb",
    padding: "8px",
    borderRadius: "10px",
    maxWidth: "70%",
  },
  inputArea: {
    display: "flex",
    gap: "10px",
  },
  input: {
    padding: "10px",
    width: "300px",
    borderRadius: "5px",
    border: "none",
  },
  button: {
    padding: "10px 20px",
    background: "#667eea",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default App;