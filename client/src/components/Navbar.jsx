import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <nav
      style={{
        background: "#111827",
        borderBottom: "1px solid #1f2937",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "18px 30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Logo */}

        <h1
          onClick={() => navigate("/")}
          style={{
            color: "#06b6d4",
            fontSize: "36px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          🎤 VoiceMentor AI
        </h1>

        {/* Menu */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "35px",
          }}
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Home
          </Link>

          <a
            href="#features"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Features
          </a>

          <a
            href="#how-it-works"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            How It Works
          </a>

          <a
            href="#faq"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            FAQ
          </a>

          <a
            href="#contact"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "18px",
            }}
          >
            Contact
          </a>
        </div>

        {/* Right Side */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          {user ? (
            <>
              <button
                onClick={() => navigate("/dashboard")}
                style={{
                  background: "#06b6d4",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Dashboard
              </button>

              <button
                onClick={() => navigate("/voice-chat")}
                style={{
                  background: "#10b981",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                🎤 AI Chat
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid #06b6d4",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                style={{
                  background: "#06b6d4",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}