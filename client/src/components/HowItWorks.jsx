export default function HowItWorks() {
  const steps = [
    {
      icon: "🎤",
      title: "1. Start Speaking",
      description:
        "Click the microphone and start speaking naturally in English. You can also type your message if you prefer.",
    },
    {
      icon: "🤖",
      title: "2. AI Listens & Replies",
      description:
        "VoiceMentor AI understands your speech, responds like a real conversation partner, and speaks back to you.",
    },
    {
      icon: "📝",
      title: "3. Learn From Corrections",
      description:
        "Receive grammar corrections, vocabulary suggestions, pronunciation guidance, and confidence tips after every conversation.",
    },
    {
      icon: "📈",
      title: "4. Track Your Progress",
      description:
        "Monitor your speaking sessions, grammar score, vocabulary growth, and daily learning progress on your dashboard.",
    },
  ];

  return (
    <section
      style={{
        background: "#0f172a",
        color: "white",
        padding: "90px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          🚀 How VoiceMentor AI Works
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "20px",
            maxWidth: "750px",
            margin: "0 auto 60px",
            lineHeight: "1.8",
          }}
        >
          Learn English through real conversations in four simple steps.
          Speak naturally, receive instant AI feedback, and improve every day.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
          }}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              style={{
                background: "#1f2937",
                padding: "35px",
                borderRadius: "20px",
                border: "1px solid #374151",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-8px)";
                e.currentTarget.style.border =
                  "1px solid #06b6d4";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
                e.currentTarget.style.border =
                  "1px solid #374151";
              }}
            >
              <div
                style={{
                  fontSize: "60px",
                  marginBottom: "20px",
                }}
              >
                {step.icon}
              </div>

              <h2
                style={{
                  color: "#06b6d4",
                  fontSize: "28px",
                  marginBottom: "18px",
                }}
              >
                {step.title}
              </h2>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                  fontSize: "17px",
                }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Flow */}

        <div
          style={{
            marginTop: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
            fontSize: "28px",
            color: "#06b6d4",
            fontWeight: "bold",
          }}
        >
          <span>🎤 Speak</span>
          <span>➡</span>
          <span>🤖 AI Responds</span>
          <span>➡</span>
          <span>📝 Get Feedback</span>
          <span>➡</span>
          <span>📈 Improve Daily</span>
        </div>

        {/* CTA */}

        <div
          style={{
            marginTop: "70px",
          }}
        >
          <button
            onClick={() => (window.location.href = "/register")}
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
            🚀 Start Learning Today
          </button>
        </div>
      </div>
    </section>
  );
}