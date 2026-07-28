import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import VoiceChat from "./pages/VoiceChat";
import Practice from "./pages/Practice";
import Grammar from "./pages/Grammar";
import Vocabulary from "./pages/Vocabulary";
import Interview from "./pages/Interview";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";

import AIChat from "./pages/AIChat";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/voice-chat"
        element={
          <ProtectedRoute>
            <VoiceChat />
          </ProtectedRoute>
        }
      />

      <Route
        path="/practice"
        element={
          <ProtectedRoute>
            <Practice />
          </ProtectedRoute>
        }
      />

      <Route
        path="/grammar"
        element={
          <ProtectedRoute>
            <Grammar />
          </ProtectedRoute>
        }
      />

      <Route
        path="/vocabulary"
        element={
          <ProtectedRoute>
            <Vocabulary />
          </ProtectedRoute>
        }
      />

      <Route
        path="/interview"
        element={
          <ProtectedRoute>
            <Interview />
          </ProtectedRoute>
        }
      />

      
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      <Route
  path="/ai-chat"
  element={
    <ProtectedRoute>
      <AIChat />
    </ProtectedRoute>
  }
/>

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;