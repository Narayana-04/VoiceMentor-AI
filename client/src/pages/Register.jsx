import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../firebase/firebase";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function register(e) {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

      await updateProfile(userCredential.user, {
        displayName: name,
      });

      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  }

  async function googleRegister() {
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
              fontSize: "46px",
              marginTop: "20px",
            }}
          >
            Join VoiceMentor AI
          </h1>

          <p
            style={{
              marginTop: "20px",
              lineHeight: "1.8",
              fontSize: "20px",
            }}
          >
            Start your English speaking
            journey today.

            <br />
            <br />

            🎙 AI Speaking Practice

            <br />

            📝 Grammar Correction

            <br />

            📚 Vocabulary Builder

            <br />

            💼 Interview Practice

            <br />

            📈 Daily Progress Tracking
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
            Create Account
          </h1>

          <p
            style={{
              color: "#94a3b8",
              marginBottom: "35px",
            }}
          >
            Create your free account.
          </p>

          <form onSubmit={register}>
            <input
              type="text"
              placeholder="👤 Full Name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
              style={{
                width: "100%",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                marginBottom: "18px",
                fontSize: "17px",
              }}
            />

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
                marginBottom: "18px",
                fontSize: "17px",
              }}
            />

            <div
              style={{
                position: "relative",
                marginBottom: "18px",
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

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="🔒 Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
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

            <label
              style={{
                display: "block",
                marginBottom: "20px",
                color: "#cbd5e1",
              }}
            >
              <input
                type="checkbox"
                required
              />{" "}
              I agree to the Terms &
              Conditions
            </label>

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
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
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
            onClick={googleRegister}
            style={{
              width: "100%",
              background: "white",
              color: "#111827",
              border: "none",
              padding: "16px",
              borderRadius: "12px",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer",
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
            Already have an account?{" "}
            <Link
              to="/login"
              style={{
                color: "#06b6d4",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}