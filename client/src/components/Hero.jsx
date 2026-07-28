import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111827",
        color: "white",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            lineHeight: "1.1",
            marginBottom: "25px",
          }}
        >
          Practice English
          <br />
          <span style={{ color: "#06b6d4" }}>
            With Your Personal AI Tutor
          </span>
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#cbd5e1",
            lineHeight: "1.8",
            marginBottom: "45px",
          }}
        >
          Improve your English speaking, pronunciation,
          grammar and vocabulary through real conversations
          with AI. Practice anytime, anywhere and build
          confidence every day.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => navigate("/login")}
            style={{
              background: "#06b6d4",
              color: "white",
              border: "none",
              padding: "16px 40px",
              borderRadius: "12px",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🎤 Start Speaking
          </button>

          <button
            onClick={() => navigate("/voice-chat")}
            style={{
              background: "transparent",
              color: "white",
              border: "2px solid #06b6d4",
              padding: "16px 40px",
              borderRadius: "12px",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            💬 Try AI Chat
          </button>
        </div>

        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h2 style={{ color: "#06b6d4" }}>24/7</h2>
            <p>AI Speaking Practice</p>
          </div>

          <div>
            <h2 style={{ color: "#06b6d4" }}>100+</h2>
            <p>Conversation Topics</p>
          </div>

          <div>
            <h2 style={{ color: "#06b6d4" }}>AI</h2>
            <p>Grammar Correction</p>
          </div>

          <div>
            <h2 style={{ color: "#06b6d4" }}>🎙</h2>
            <p>Voice Conversation</p>
          </div>
        </div>
      </div>
    </section>
  );
}