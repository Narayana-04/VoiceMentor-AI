import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  async function handleLogout() {
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        padding: "30px",
      }}
    >
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <button
          onClick={() => navigate("/dashboard")}
          style={{
            background: "#374151",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          ⬅ Back
        </button>

        <h1>👤 My Profile</h1>

        <button
          onClick={handleLogout}
          style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {/* Profile Card */}

      <div
        style={{
          background: "#1f2937",
          borderRadius: "20px",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <img
          src={
            user?.photoURL ||
            "https://ui-avatars.com/api/?name=User&background=06b6d4&color=fff"
          }
          alt="Profile"
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            marginBottom: "20px",
          }}
        />

        <h2>
          {user?.displayName || "VoiceMentor User"}
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            marginTop: "8px",
          }}
        >
          {user?.email}
        </p>
      </div>

      {/* Details */}

      <div
        style={{
          marginTop: "30px",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px",
        }}
      >
        <div
          style={{
            background: "#1f2937",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>🎯 English Level</h3>
          <h2
            style={{
              color: "#22c55e",
              marginTop: "15px",
            }}
          >
            Beginner
          </h2>
        </div>

        <div
          style={{
            background: "#1f2937",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>🔥 Daily Goal</h3>
          <h2
            style={{
              color: "#06b6d4",
              marginTop: "15px",
            }}
          >
            30 Minutes
          </h2>
        </div>

        <div
          style={{
            background: "#1f2937",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>🎤 Preferred Practice</h3>
          <h2
            style={{
              color: "#f59e0b",
              marginTop: "15px",
            }}
          >
            Speaking
          </h2>
        </div>

        <div
          style={{
            background: "#1f2937",
            padding: "20px",
            borderRadius: "15px",
          }}
        >
          <h3>📅 Member Since</h3>
          <h2
            style={{
              color: "#8b5cf6",
              marginTop: "15px",
            }}
          >
            2026
          </h2>
        </div>
      </div>

      {/* Learning Tips */}

      <div
        style={{
          marginTop: "30px",
          background: "#1f2937",
          padding: "25px",
          borderRadius: "15px",
        }}
      >
        <h2>💡 Learning Tips</h2>

        <ul
          style={{
            marginTop: "15px",
            lineHeight: "2",
          }}
        >
          <li>🎤 Speak English every day.</li>
          <li>📚 Learn at least 5 new words daily.</li>
          <li>📝 Practice grammar regularly.</li>
          <li>💼 Attend AI interview practice.</li>
          <li>⭐ Complete your daily goal.</li>
        </ul>
      </div>

      {/* Account */}

      <div
        style={{
          marginTop: "30px",
          background: "#1f2937",
          padding: "25px",
          borderRadius: "15px",
        }}
      >
        <h2>⚙ Account Information</h2>

        <p style={{ marginTop: "15px" }}>
          <strong>Email:</strong>{" "}
          {user?.email}
        </p>

        <p style={{ marginTop: "10px" }}>
          <strong>User ID:</strong>{" "}
          {user?.uid}
        </p>

        <p style={{ marginTop: "10px" }}>
          <strong>Email Verified:</strong>{" "}
          {user?.emailVerified ? "Yes ✅" : "No ❌"}
        </p>
      </div>
    </div>
  );
}