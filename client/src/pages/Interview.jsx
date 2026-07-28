import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { askAI } from "../services/aiService";
import { speak } from "../services/textToSpeech";
import { startListening } from "../services/speechService";

export default function Interview() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [started, setStarted] = useState(false);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function startInterview() {
    setStarted(true);
    setLoading(true);

    try {
      const reply = await askAI([
        {
          role: "user",
          content: `
You are an HR interviewer.

Start an interview for a Computer Science student.

Rules:

- Ask only ONE question.
- Wait for my answer.
- Correct my grammar.
- Give confidence tips.
- Ask the next interview question.
`,
        },
      ]);

      setMessages([
        {
          role: "assistant",
          text: reply,
        },
      ]);

      speak(reply);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  async function sendMessage(text = message) {
    if (!text.trim()) return;

    const updated = [
      ...messages,
      {
        role: "user",
        text,
      },
    ];

    setMessages(updated);

    setMessage("");

    setLoading(true);

    try {
      const aiHistory = updated.map((m) => ({
        role: m.role,
        content: m.text,
      }));

      const reply = await askAI(aiHistory);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: reply,
        },
      ]);

      speak(reply);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  function handleMic() {
    setListening(true);

    startListening(
      (speech) => {
        setListening(false);
        setMessage(speech);
      },
      () => {
        setListening(false);
      }
    );
  }

  function endInterview() {
    setStarted(false);
    setMessages([]);
    setMessage("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
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
            padding: "10px 18px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ⬅ Back
        </button>

        <h1>💼 AI Interview Practice</h1>

        {!started ? (
          <button
            onClick={startInterview}
            style={{
              background: "#06b6d4",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            ▶ Start Interview
          </button>
        ) : (
          <button
            onClick={endInterview}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            ⛔ End Interview
          </button>
        )}
      </div>

      <div
        style={{
          background: "#1f2937",
          borderRadius: "15px",
          height: "480px",
          overflowY: "auto",
          padding: "20px",
        }}
      >
        {!started && (
          <div
            style={{
              color: "#9ca3af",
              textAlign: "center",
              marginTop: "180px",
            }}
          >
            Click Start Interview to begin.
          </div>
        )}

        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                msg.role === "user"
                  ? "flex-end"
                  : "flex-start",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                background:
                  msg.role === "assistant"
                    ? "#374151"
                    : "#06b6d4",
                padding: "15px",
                borderRadius: "15px",
                maxWidth: "70%",
              }}
            >
              <strong>
                {msg.role === "assistant"
                  ? "🤖 Interviewer"
                  : "👤 You"}
              </strong>

              <p
                style={{
                  marginTop: "8px",
                  lineHeight: "1.6",
                }}
              >
                {msg.text}
              </p>
            </div>
          </div>
        ))}

        {loading && (
          <div
            style={{
              background: "#374151",
              width: "180px",
              padding: "15px",
              borderRadius: "15px",
            }}
          >
            🤖 Thinking...
          </div>
        )}

        <div ref={bottomRef}></div>
      </div>

      {started && (
        <>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type or speak your answer..."
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "15px",
              borderRadius: "10px",
              fontSize: "17px",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "15px",
              marginTop: "20px",
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
              {listening
                ? "🎙 Listening..."
                : "🎤 Speak"}
            </button>

            <button
              onClick={() => sendMessage()}
              disabled={loading}
              style={{
                background: "#10b981",
                color: "white",
                border: "none",
                padding: "12px 25px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              {loading
                ? "Thinking..."
                : "📤 Send Answer"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}