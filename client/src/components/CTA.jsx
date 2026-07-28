import { useNavigate } from "react-router-dom";

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        background: "linear-gradient(135deg,#06b6d4,#2563eb)",
        padding: "90px 20px",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontWeight: "bold",
            marginBottom: "25px",
          }}
        >
          🚀 Ready to Improve Your English?
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: "1.8",
            maxWidth: "850px",
            margin: "0 auto",
            marginBottom: "45px",
            opacity: 0.95,
          }}
        >
          Join thousands of learners who practice English every day with
          VoiceMentor AI. Speak naturally, improve your grammar,
          expand your vocabulary, and build confidence with
          real AI conversations.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginBottom: "60px",
          }}
        >
          <button
            onClick={() => navigate("/register")}
            style={{
              background: "white",
              color: "#06b6d4",
              border: "none",
              padding: "18px 40px",
              borderRadius: "12px",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🚀 Create Free Account
          </button>

          <button
            onClick={() => navigate("/login")}
            style={{
              background: "transparent",
              color: "white",
              border: "2px solid white",
              padding: "18px 40px",
              borderRadius: "12px",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🎤 Start Speaking
          </button>
        </div>

        {/* Statistics */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h1
              style={{
                fontSize: "42px",
                marginBottom: "10px",
              }}
            >
              🎤
            </h1>

            <h2>Voice Practice</h2>

            <p>Speak naturally with AI anytime.</p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h1
              style={{
                fontSize: "42px",
                marginBottom: "10px",
              }}
            >
              📝
            </h1>

            <h2>Grammar Correction</h2>

            <p>Instant feedback on every sentence.</p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h1
              style={{
                fontSize: "42px",
                marginBottom: "10px",
              }}
            >
              📚
            </h1>

            <h2>Vocabulary Builder</h2>

            <p>Learn new words every day.</p>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              padding: "25px",
              borderRadius: "15px",
            }}
          >
            <h1
              style={{
                fontSize: "42px",
                marginBottom: "10px",
              }}
            >
              💼
            </h1>

            <h2>Interview Practice</h2>

            <p>Prepare for real job interviews.</p>
          </div>
        </div>
      </div>
    </section>
  );
}