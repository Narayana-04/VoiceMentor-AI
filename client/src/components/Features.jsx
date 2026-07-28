export default function Features() {
  const features = [
    {
      icon: "🎤",
      title: "AI Voice Conversation",
      description:
        "Talk naturally with VoiceMentor AI using your microphone and receive spoken responses instantly.",
    },
    {
      icon: "📝",
      title: "Grammar Correction",
      description:
        "Every sentence is checked instantly with simple explanations and improved English.",
    },
    {
      icon: "📚",
      title: "Vocabulary Builder",
      description:
        "Learn new English words, meanings, pronunciation, examples, synonyms and antonyms.",
    },
    {
      icon: "💼",
      title: "Interview Practice",
      description:
        "Practice HR interviews with AI and receive feedback on grammar, confidence and vocabulary.",
    },
    {
      icon: "✈️",
      title: "Real-Life Conversations",
      description:
        "Practice English for travel, restaurants, shopping, meetings and everyday situations.",
    },
    {
      icon: "📈",
      title: "Track Your Progress",
      description:
        "Monitor speaking sessions, grammar improvement, vocabulary growth and daily learning streaks.",
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
          maxWidth: "1300px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Why Choose VoiceMentor AI?
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "20px",
            maxWidth: "800px",
            margin: "0 auto 60px",
            lineHeight: "1.8",
          }}
        >
          Everything you need to improve your English speaking
          confidence with the help of Artificial Intelligence.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                background: "#1f2937",
                borderRadius: "20px",
                padding: "35px",
                textAlign: "left",
                transition: "0.3s",
                border: "1px solid #374151",
                cursor: "pointer",
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
                  fontSize: "55px",
                  marginBottom: "20px",
                }}
              >
                {feature.icon}
              </div>

              <h2
                style={{
                  fontSize: "28px",
                  marginBottom: "18px",
                  color: "#06b6d4",
                }}
              >
                {feature.title}
              </h2>

              <p
                style={{
                  color: "#cbd5e1",
                  fontSize: "17px",
                  lineHeight: "1.8",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "70px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(200px,1fr))",
            gap: "25px",
          }}
        >
          <div
            style={{
              background: "#06b6d4",
              borderRadius: "15px",
              padding: "25px",
              color: "white",
            }}
          >
            <h1 style={{ fontSize: "42px" }}>24/7</h1>
            <p>AI Available Anytime</p>
          </div>

          <div
            style={{
              background: "#10b981",
              borderRadius: "15px",
              padding: "25px",
              color: "white",
            }}
          >
            <h1 style={{ fontSize: "42px" }}>100+</h1>
            <p>Practice Topics</p>
          </div>

          <div
            style={{
              background: "#8b5cf6",
              borderRadius: "15px",
              padding: "25px",
              color: "white",
            }}
          >
            <h1 style={{ fontSize: "42px" }}>AI</h1>
            <p>Grammar Correction</p>
          </div>

          <div
            style={{
              background: "#f97316",
              borderRadius: "15px",
              padding: "25px",
              color: "white",
            }}
          >
            <h1 style={{ fontSize: "42px" }}>🎙</h1>
            <p>Real Voice Practice</p>
          </div>
        </div>
      </div>
    </section>
  );
}