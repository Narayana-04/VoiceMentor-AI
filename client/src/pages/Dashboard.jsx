import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const cards = [
    {
      title: "🎤 AI Chat",
      value: "Talk with AI",
      color: "#06b6d4",
      path: "/voice-chat",
    },
    {
      title: "🎯 Practice",
      value: "Daily English",
      color: "#10b981",
      path: "/practice",
    },
    {
      title: "📝 Grammar",
      value: "Grammar Checker",
      color: "#8b5cf6",
      path: "/grammar",
    },
    {
      title: "📚 Vocabulary",
      value: "Learn Words",
      color: "#f59e0b",
      path: "/vocabulary",
    },
    {
      title: "💼 Interview",
      value: "HR Practice",
      color: "#ef4444",
      path: "/interview",
    },
    {
      title: "👤 Profile",
      value: "My Account",
      color: "#3b82f6",
      path: "/profile",
    },
    {
      title: "⚙ Settings",
      value: "Preferences",
      color: "#64748b",
      path: "/settings",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111827",
        color: "white",
        padding: "35px",
      }}
    >
      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "42px",
              marginBottom: "10px",
            }}
          >
            👋 Welcome
          </h1>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
            }}
          >
            {user?.displayName || user?.email}
          </p>
        </div>

        <button
          onClick={() => navigate("/voice-chat")}
          style={{
            background: "#06b6d4",
            color: "white",
            border: "none",
            padding: "15px 30px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          🎤 Start Speaking
        </button>
      </div>

      {/* Stats */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          marginBottom: "45px",
        }}
      >
        <div
          style={{
            background: "#06b6d4",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>🔥 Streak</h3>
          <h1 style={{ fontSize: "42px" }}>7 Days</h1>
        </div>

        <div
          style={{
            background: "#10b981",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>🎤 Speaking</h3>
          <h1 style={{ fontSize: "42px" }}>18</h1>
        </div>

        <div
          style={{
            background: "#8b5cf6",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>📝 Grammar</h3>
          <h1 style={{ fontSize: "42px" }}>88%</h1>
        </div>

        <div
          style={{
            background: "#f97316",
            padding: "25px",
            borderRadius: "15px",
          }}
        >
          <h3>📚 Vocabulary</h3>
          <h1 style={{ fontSize: "42px" }}>146</h1>
        </div>
      </div>

      {/* Quick Access */}

      <h2
        style={{
          marginBottom: "25px",
        }}
      >
        🚀 Quick Access
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "25px",
        }}
      >
        {cards.map((card) => (
          <div
            key={card.title}
            onClick={() => navigate(card.path)}
            style={{
              background: "#1f2937",
              borderRadius: "18px",
              padding: "30px",
              cursor: "pointer",
              borderLeft: `6px solid ${card.color}`,
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform =
                "translateY(-6px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform =
                "translateY(0px)";
            }}
          >
            <h2
              style={{
                marginBottom: "15px",
                color: card.color,
              }}
            >
              {card.title}
            </h2>

            <p
              style={{
                color: "#cbd5e1",
                marginBottom: "25px",
              }}
            >
              {card.value}
            </p>

            <button
              style={{
                background: card.color,
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              Open →
            </button>
          </div>
        ))}
      </div>

      {/* Daily Goal */}

      <div
        style={{
          background: "#1f2937",
          marginTop: "45px",
          padding: "30px",
          borderRadius: "18px",
        }}
      >
        <h2>🎯 Today's Goal</h2>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <p>Practice English for 30 minutes</p>

          <div
            style={{
              width: "100%",
              height: "18px",
              background: "#374151",
              borderRadius: "20px",
              marginTop: "15px",
            }}
          >
            <div
              style={{
                width: "60%",
                height: "100%",
                background: "#06b6d4",
                borderRadius: "20px",
              }}
            ></div>
          </div>

          <p
            style={{
              marginTop: "15px",
              color: "#06b6d4",
            }}
          >
            18 / 30 Minutes Completed
          </p>
        </div>
      </div>

      {/* Motivation */}

      <div
        style={{
          background: "#1f2937",
          marginTop: "35px",
          padding: "30px",
          borderRadius: "18px",
        }}
      >
        <h2>💡 Daily Motivation</h2>

        <p
          style={{
            marginTop: "15px",
            lineHeight: "1.8",
            color: "#cbd5e1",
          }}
        >
          Every conversation improves your English.
          Don't worry about mistakes—keep speaking,
          keep learning, and your confidence will
          grow every day.
        </p>
      </div>
    </div>
  );
}