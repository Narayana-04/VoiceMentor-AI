export default function FAQ() {
  const faqs = [
    {
      question: "What is VoiceMentor AI?",
      answer:
        "VoiceMentor AI is an AI-powered English speaking coach that helps you improve speaking, grammar, pronunciation, vocabulary, and interview skills through natural conversations.",
    },
    {
      question: "Can I practice speaking with my voice?",
      answer:
        "Yes. Simply click the microphone button and start speaking. VoiceMentor AI listens, understands your speech, replies naturally, and gives helpful corrections.",
    },
    {
      question: "Does VoiceMentor AI correct grammar mistakes?",
      answer:
        "Yes. Every time you speak or type, VoiceMentor AI checks your grammar, explains mistakes in simple English, and suggests a better sentence.",
    },
    {
      question: "Can I prepare for job interviews?",
      answer:
        "Absolutely! VoiceMentor AI acts as an HR interviewer, asks interview questions, evaluates your answers, and provides feedback to improve your confidence.",
    },
    {
      question: "Can beginners use VoiceMentor AI?",
      answer:
        "Yes. VoiceMentor AI is designed for everyone—from beginners to advanced English learners. Lessons and conversations adapt to your level.",
    },
    {
      question: "Do I need to pay to use VoiceMentor AI?",
      answer:
        "You can start using the basic features for free. More advanced features may be available in future premium plans.",
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
          maxWidth: "1000px",
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
            ❓ Frequently Asked Questions
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "20px",
              lineHeight: "1.8",
            }}
          >
            Everything you need to know about VoiceMentor AI.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {faqs.map((faq, index) => (
            <details
              key={index}
              style={{
                background: "#1f2937",
                padding: "22px",
                borderRadius: "15px",
                border: "1px solid #374151",
                cursor: "pointer",
              }}
            >
              <summary
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                  color: "#06b6d4",
                  outline: "none",
                }}
              >
                {faq.question}
              </summary>

              <p
                style={{
                  marginTop: "18px",
                  color: "#cbd5e1",
                  lineHeight: "1.8",
                  fontSize: "17px",
                }}
              >
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div
          style={{
            marginTop: "60px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
            }}
          >
            Still have questions?
          </h2>

          <button
            onClick={() =>
              (window.location.href = "/register")
            }
            style={{
              background: "#06b6d4",
              color: "white",
              border: "none",
              padding: "15px 35px",
              borderRadius: "12px",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            🚀 Get Started
          </button>
        </div>
      </div>
    </section>
  );
}