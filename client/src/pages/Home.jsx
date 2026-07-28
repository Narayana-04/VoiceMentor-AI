import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Demo from "../components/Demo";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
      style={{
        background: "#111827",
        color: "white",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Trusted Companies */}

      <section
        style={{
          padding: "70px 20px",
          background: "#0f172a",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          Trusted by Learners Worldwide
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            marginBottom: "50px",
            fontSize: "18px",
          }}
        >
          Thousands of learners improve their English every day with
          VoiceMentor AI.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              name: "Google",
              logo: "https://www.google.com/favicon.ico",
            },
            {
              name: "OpenAI",
              logo: "https://openai.com/favicon.ico",
            },
            {
              name: "Firebase",
              logo: "https://firebase.google.com/favicon.ico",
            },
            {
              name: "React",
              logo: "https://react.dev/favicon.ico",
            },
          ].map((company) => (
            <div
              key={company.name}
              style={{
                background: "#1f2937",
                width: "220px",
                padding: "25px",
                borderRadius: "15px",
                border: "1px solid #374151",
              }}
            >
              <img
                src={company.logo}
                alt={company.name}
                width={55}
                height={55}
              />

              <h3
                style={{
                  marginTop: "15px",
                  fontSize: "22px",
                }}
              >
                {company.name}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}

      <section id="features">
        <Features />
      </section>

      {/* How It Works */}

      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Demo */}

      <section id="demo">
        <Demo />
      </section>

      {/* FAQ */}

      <section id="faq">
        <FAQ />
      </section>

      {/* Call To Action */}

      <CTA />

      {/* Footer */}

      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}