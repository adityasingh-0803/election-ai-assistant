import React, { useEffect, useState } from "react";
import axios from "axios";

function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8001/quiz/")
      .then(res => setQuestions(res.data));
  }, []);

  const handleAnswer = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    setSelected("");
    setCurrent(current + 1);
  };

  if (questions.length === 0) return <p>Loading...</p>;

  if (current >= questions.length) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>🎉 Quiz Completed!</h2>
        <p>Your Score: {score} / {questions.length}</p>
      </div>
    );
  }

  const q = questions[current];

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{q.question}</h2>

      {q.options.map((opt, i) => (
        <div key={i}>
          <input
            type="radio"
            value={opt}
            checked={selected === opt}
            onChange={(e) => setSelected(e.target.value)}
          />
          {opt}
        </div>
      ))}

      <button onClick={handleAnswer} disabled={!selected}>
        Next
      </button>
    </div>
  );
}

export default Quiz;