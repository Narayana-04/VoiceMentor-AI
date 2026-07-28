import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { askAI } from "../services/aiService";
import { startListening } from "../services/speechService";
import { speak } from "../services/textToSpeech";

export default function Grammar() {
  const navigate = useNavigate();

  const [sentence, setSentence] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  async function checkGrammar(text = sentence) {
    if (!text.trim()) return;

    setLoading(true);

    try {
      const reply = await askAI([
        {
          role: "user",
          content: `
You are an English Grammar Teacher.

Check this sentence:

${text}

Reply in this format only:

Grammar Score:

Original Sentence:

Correct Sentence:

Explanation:

Better Version:

Ask one follow-up question.
`,
        },
      ]);

      setResult(reply);

      speak(reply);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function handleMic() {
    setListening(true);

    startListening(
      (speechText) => {
        setListening(false);
        setSentence(speechText);
      },
      () => {
        setListening(false);
      }
    );
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      checkGrammar();
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        padding: "30px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
        }}
      >
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            background: "#374151",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ⬅ Back
        </button>

        <h1>📝 Grammar Checker</h1>

        <button
          onClick={() => {
            setSentence("");
            setResult("");
          }}
          style={{
            background: "#06b6d4",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ➕ New Check
        </button>
      </div>

      <textarea
        rows={6}
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type or speak your English sentence..."
        style={{
          width: "100%",
          padding: "15px",
          borderRadius: "10px",
          fontSize: "17px",
          marginBottom: "20px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "25px",
        }}
      >
        <button
          onClick={handleMic}
          style={{
            background: "#8b5cf6",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          {listening ? "🎙 Listening..." : "🎤 Speak"}
        </button>

        <button
          onClick={() => checkGrammar()}
          disabled={loading}
          style={{
            background: "#06b6d4",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          {loading ? "Checking..." : "✅ Check Grammar"}
        </button>
      </div>

      <div
        style={{
          background: "#1f2937",
          borderRadius: "15px",
          padding: "20px",
          minHeight: "350px",
          whiteSpace: "pre-wrap",
          lineHeight: "1.8",
        }}
      >
        {!result ? (
          <div style={{ color: "#9ca3af" }}>
            Grammar corrections will appear here...
          </div>
        ) : (
          result
        )}
      </div>
    </div>
  );
}