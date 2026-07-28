import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer
      style={{
        background: "#0f172a",
        color: "white",
        padding: "70px 20px 30px",
        borderTop: "1px solid #1f2937",
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          {/* Logo */}

          <div>
            <h1
              style={{
                color: "#06b6d4",
                fontSize: "36px",
                marginBottom: "15px",
              }}
            >
              🎤 VoiceMentor AI
            </h1>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              Your personal AI English speaking coach.
              Practice speaking, grammar, vocabulary,
              interviews and pronunciation with real AI
              conversations.
            </p>
          </div>

          {/* Features */}

          <div>
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Features
            </h2>

            <p style={{ marginBottom: "12px" }}>
              🎤 AI Voice Chat
            </p>

            <p style={{ marginBottom: "12px" }}>
              📝 Grammar Checker
            </p>

            <p style={{ marginBottom: "12px" }}>
              📚 Vocabulary Builder
            </p>

            <p style={{ marginBottom: "12px" }}>
              💼 Interview Practice
            </p>

            <p style={{ marginBottom: "12px" }}>
              📈 Progress Tracking
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Quick Links
            </h2>

            <p
              style={{
                cursor: "pointer",
                marginBottom: "12px",
              }}
              onClick={() => navigate("/")}
            >
              Home
            </p>

            <p
              style={{
                cursor: "pointer",
                marginBottom: "12px",
              }}
              onClick={() => navigate("/login")}
            >
              Login
            </p>

            <p
              style={{
                cursor: "pointer",
                marginBottom: "12px",
              }}
              onClick={() => navigate("/register")}
            >
              Register
            </p>

            <p
              style={{
                cursor: "pointer",
                marginBottom: "12px",
              }}
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </p>

            <p
              style={{
                cursor: "pointer",
                marginBottom: "12px",
              }}
              onClick={() => navigate("/voice-chat")}
            >
              AI Chat
            </p>
          </div>

          {/* Contact */}

          <div>
            <h2
              style={{
                marginBottom: "20px",
              }}
            >
              Contact
            </h2>

            <p style={{ marginBottom: "12px" }}>
              📧 support@voicementorai.com
            </p>

            <p style={{ marginBottom: "12px" }}>
              🌐 www.voicementorai.com
            </p>

            <p style={{ marginBottom: "12px" }}>
              📍 India
            </p>

            <div
              style={{
                display: "flex",
                gap: "15px",
                marginTop: "20px",
                fontSize: "28px",
              }}
            >
              <span style={{ cursor: "pointer" }}>
                📘
              </span>

              <span style={{ cursor: "pointer" }}>
                📷
              </span>

              <span style={{ cursor: "pointer" }}>
                🐦
              </span>

              <span style={{ cursor: "pointer" }}>
                💼
              </span>
            </div>
          </div>
        </div>

        <hr
          style={{
            border: "1px solid #1f2937",
            marginBottom: "25px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
            color: "#94a3b8",
          }}
        >
          <p>
            © 2026 VoiceMentor AI. All rights
            reserved.
          </p>

          <p>
            Built with ❤️ using React, Firebase,
            Node.js and Groq AI.
          </p>
        </div>
      </div>
    </footer>
  );
}