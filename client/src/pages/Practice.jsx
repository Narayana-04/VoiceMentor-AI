import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { askAI } from "../services/aiService";
import { speak } from "../services/textToSpeech";
import { startListening } from "../services/speechService";

const modes = [
  {
    title: "🗣 Daily Conversation",
    prompt: "Let's practice Daily Conversation.",
  },
  {
    title: "💼 Job Interview",
    prompt: "Let's do a Job Interview.",
  },
  {
    title: "✈ Travel English",
    prompt: "Let's practice Travel English.",
  },
  {
    title: "🍔 Restaurant",
    prompt: "Let's practice Restaurant English.",
  },
  {
    title: "🛒 Shopping",
    prompt: "Let's practice Shopping English.",
  },
  {
    title: "👩‍🏫 Teacher Mode",
    prompt: "Teach me English.",
  },
  {
    title: "📚 Vocabulary",
    prompt: "Teach me new English vocabulary.",
  },
];

export default function Practice() {
  const navigate = useNavigate();

  const [selectedMode, setSelectedMode] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);

  async function startPractice(mode) {
    setSelectedMode(mode.title);
    setLoading(true);

    try {
      const history = [
        {
          role: "user",
          text: mode.prompt,
        },
      ];

      setMessages(history);

      const aiReply = await askAI([
        {
          role: "user",
          content: mode.prompt,
        },
      ]);

      const assistant = {
        role: "assistant",
        text: aiReply,
      };

      setMessages([...history, assistant]);

      speak(aiReply);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
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

    const aiMessages = updated.map((m) => ({
      role: m.role,
      content: m.text,
    }));

    setMessage("");

    setLoading(true);

    try {
      const aiReply = await askAI(aiMessages);

      const assistant = {
        role: "assistant",
        text: aiReply,
      };

      setMessages((prev) => [...prev, assistant]);

      speak(aiReply);
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
        setMessage(speechText);
      },
      () => {
        setListening(false);
      }
    );
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

        <h1>🎯 English Practice</h1>

        <button
          onClick={() => {
            setSelectedMode("");
            setMessages([]);
            setMessage("");
          }}
          style={{
            background: "#06b6d4",
            color: "white",
            border: "none",
            padding: "10px 18px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ➕ New Practice
        </button>
      </div>

      {!selectedMode && (
        <>
          <h3>Select a Practice Mode</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(220px,1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {modes.map((mode) => (
              <div
                key={mode.title}
                onClick={() => startPractice(mode)}
                style={{
                  background: "#1f2937",
                  padding: "25px",
                  borderRadius: "15px",
                  cursor: "pointer",
                  transition: ".3s",
                }}
              >
                <h3>{mode.title}</h3>
              </div>
            ))}
          </div>
        </>
      )}

      {selectedMode && (
        <>
          <div
            style={{
              marginTop: "30px",
              background: "#1f2937",
              borderRadius: "15px",
              padding: "20px",
              height: "420px",
              overflowY: "auto",
            }}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.role === "user"
                      ? "flex-end"
                      : "flex-start",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    background:
                      msg.role === "user"
                        ? "#06b6d4"
                        : "#374151",
                    padding: "15px",
                    borderRadius: "15px",
                    maxWidth: "70%",
                  }}
                >
                  <strong>
                    {msg.role === "user"
                      ? "👤 You"
                      : "🤖 VoiceMentor AI"}
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
          </div>

          <textarea
            rows={4}
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Type or speak your English..."
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "15px",
              borderRadius: "10px",
              fontSize: "16px",
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
                padding: "12px 22px",
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
                background: "#06b6d4",
                color: "white",
                border: "none",
                padding: "12px 22px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              {loading ? "Thinking..." : "📤 Send"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}