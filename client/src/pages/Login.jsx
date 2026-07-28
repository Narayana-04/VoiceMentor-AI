import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function login(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  async function googleLogin() {
    try {
      const provider =
        new GoogleAuthProvider();

      await signInWithPopup(auth, provider);

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#111827,#1f2937)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "1100px",
          maxWidth: "100%",
          display: "grid",
          gridTemplateColumns:
            "1fr 1fr",
          background: "#1f2937",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow:
            "0 0 30px rgba(0,0,0,.4)",
        }}
      >
        {/* LEFT */}

        <div
          style={{
            background:
              "linear-gradient(135deg,#06b6d4,#2563eb)",
            color: "white",
            padding: "60px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: "90px",
            }}
          >
            🎤
          </div>

          <h1
            style={{
              fontSize: "48px",
              marginTop: "20px",
            }}
          >
            Welcome Back
          </h1>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
              fontSize: "20px",
            }}
          >
            Practice English with your
            personal AI speaking coach.

            <br />
            <br />

            Improve Grammar

            <br />

            Learn Vocabulary

            <br />

            Crack Interviews

            <br />

            Speak Confidently
          </p>
        </div>

        {/* RIGHT */}

        <div
          style={{
            padding: "60px",
            background: "#111827",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              marginBottom: "10px",
            }}
          >
            Login
          </h1>

          <p
            style={{
              color: "#94a3b8",
              marginBottom: "35px",
            }}
          >
            Sign in to continue learning.
          </p>

          <form onSubmit={login}>
            <input
              type="email"
              placeholder="📧 Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                marginBottom: "20px",
                fontSize: "17px",
              }}
            />

            <div
              style={{
                position: "relative",
              }}
            >
              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="🔒 Password"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                required
                style={{
                  width: "100%",
                  padding: "16px",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "17px",
                }}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                style={{
                  position: "absolute",
                  right: "15px",
                  top: "15px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
              >
                {showPassword
                  ? "🙈"
                  : "👁"}
              </button>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                marginTop: "18px",
                marginBottom: "30px",
                fontSize: "15px",
              }}
            >
              <label>
                <input
                  type="checkbox"
                />{" "}
                Remember Me
              </label>

              <span
                style={{
                  color: "#06b6d4",
                  cursor: "pointer",
                }}
              >
                Forgot Password?
              </span>
            </div>

            {error && (
              <div
                style={{
                  color: "#ef4444",
                  marginBottom: "15px",
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              style={{
                width: "100%",
                background:
                  "#06b6d4",
                color: "white",
                border: "none",
                padding: "16px",
                borderRadius: "12px",
                fontSize: "18px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              {loading
                ? "Signing In..."
                : "Login"}
            </button>
          </form>

          <div
            style={{
              textAlign: "center",
              margin: "25px 0",
              color: "#94a3b8",
            }}
          >
            OR
          </div>

          <button
            onClick={googleLogin}
            style={{
              width: "100%",
              background: "white",
              color: "#111827",
              border: "none",
              padding: "16px",
              borderRadius: "12px",
              fontSize: "17px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Continue with Google
          </button>

          <p
            style={{
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{
                color: "#06b6d4",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}