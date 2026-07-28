import { useNavigate } from "react-router-dom";

export default function Demo() {
  const navigate = useNavigate();

  const demoChat = [
    {
      role: "user",
      text: "Hello, how are you?",
    },
    {
      role: "ai",
      text: "I'm doing great! 😊 Your sentence is correct. What did you do today?",
    },
    {
      role: "user",
      text: "I goed to market yesterday.",
    },
    {
      role: "ai",
      text: "Almost! ✅\n\nCorrect sentence:\n'I went to the market yesterday.'\n\n'Goed' is incorrect. The past tense of 'go' is 'went'.",
    },
  ];

  return (
    <section
      style={{
        background: "#111827",
        color: "white",
        padding: "90px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            💬 See VoiceMentor AI in Action
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "20px",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Have natural English conversations, receive instant
            grammar corrections, and improve your confidence with
            AI-powered speaking practice.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(400px,1fr))",
            gap: "50px",
            alignItems: "center",
          }}
        >
          {/* Left Side */}

          <div>
            <h2
              style={{
                fontSize: "38px",
                marginBottom: "25px",
              }}
            >
              Why Students Love VoiceMentor AI ❤️
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "#1f2937",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              >
                🎤 Practice speaking with AI anytime.
              </div>

              <div
                style={{
                  background: "#1f2937",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              >
                📝 Instant grammar corrections.
              </div>

              <div
                style={{
                  background: "#1f2937",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              >
                📚 Learn vocabulary naturally.
              </div>

              <div
                style={{
                  background: "#1f2937",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              >
                💼 Prepare for job interviews.
              </div>

              <div
                style={{
                  background: "#1f2937",
                  padding: "20px",
                  borderRadius: "15px",
                }}
              >
                🌍 Practice travel and daily English.
              </div>
            </div>
          </div>

          {/* Right Side */}

          <div
            style={{
              background: "#1f2937",
              borderRadius: "20px",
              padding: "30px",
              border: "1px solid #374151",
            }}
          >
            <h2
              style={{
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              🤖 Demo Conversation
            </h2>

            {demoChat.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent:
                    msg.role === "user"
                      ? "flex-end"
                      : "flex-start",
                  marginBottom: "20px",
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
                    maxWidth: "75%",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  <strong>
                    {msg.role === "user"
                      ? "👤 You"
                      : "🤖 VoiceMentor AI"}
                  </strong>

                  <p
                    style={{
                      marginTop: "10px",
                      lineHeight: "1.7",
                    }}
                  >
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "30px",
              }}
            >
              <button
                onClick={() => navigate("/voice-chat")}
                style={{
                  background: "#06b6d4",
                  color: "white",
                  border: "none",
                  padding: "15px 35px",
                  borderRadius: "12px",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
              >
                🎤 Try VoiceMentor AI
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}

        <div
          style={{
            marginTop: "70px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "#06b6d4",
              padding: "25px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "42px" }}>24/7</h1>
            <p>AI Speaking Coach</p>
          </div>

          <div
            style={{
              background: "#10b981",
              padding: "25px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "42px" }}>100+</h1>
            <p>Conversation Topics</p>
          </div>

          <div
            style={{
              background: "#8b5cf6",
              padding: "25px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "42px" }}>AI</h1>
            <p>Grammar Feedback</p>
          </div>

          <div
            style={{
              background: "#f97316",
              padding: "25px",
              borderRadius: "15px",
              textAlign: "center",
            }}
          >
            <h1 style={{ fontSize: "42px" }}>🎙</h1>
            <p>Voice Practice</p>
          </div>
        </div>
      </div>
    </section>
  );
}