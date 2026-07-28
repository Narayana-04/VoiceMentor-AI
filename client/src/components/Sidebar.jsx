import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaMicrophone,
  FaBook,
  FaSpellCheck,
  FaBriefcase,
  FaChartLine,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const menus = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Speaking", icon: <FaMicrophone />, path: "/voice-chat" },
    { name: "Grammar", icon: <FaSpellCheck />, path: "/grammar" },
    { name: "Vocabulary", icon: <FaBook />, path: "/vocabulary" },
    { name: "Interview", icon: <FaBriefcase />, path: "/interview" },
    { name: "Progress", icon: <FaChartLine />, path: "/progress" },
    { name: "Profile", icon: <FaUser />, path: "/profile" },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  return (
    <div
      style={{
        width: "250px",
        background: "#111827",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>🎤 VoiceMentor AI</h2>

      {menus.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px",
            color: location.pathname === item.path ? "#38bdf8" : "white",
            textDecoration: "none",
            marginBottom: "10px",
            borderRadius: "8px",
            background:
              location.pathname === item.path ? "#1e293b" : "transparent",
          }}
        >
          {item.icon}
          {item.name}
        </Link>
      ))}

      <button
        style={{
          marginTop: "30px",
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        <FaSignOutAlt /> Logout
      </button>
    </div>
  );
};

export default Sidebar;