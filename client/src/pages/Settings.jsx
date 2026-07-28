import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  loadVoices,
  setVoice,
  speak,
} from "../services/textToSpeech";

export default function Settings() {
  const navigate = useNavigate();

  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");

  const [speechRate, setSpeechRate] = useState(1);
  const [speechPitch, setSpeechPitch] = useState(1);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    loadVoices().then((voiceList) => {
      setVoices(voiceList);

      if (voiceList.length > 0) {
        setSelectedVoice(voiceList[0].name);
      }
    });
  }, []);

  function testVoice() {
    setVoice(selectedVoice);

    const utterance = new SpeechSynthesisUtterance(
      "Hello! I am VoiceMentor AI. Nice to meet you."
    );

    utterance.rate = speechRate;
    utterance.pitch = speechPitch;

    const voice = speechSynthesis
      .getVoices()
      .find((v) => v.name === selectedVoice);

    if (voice) {
      utterance.voice = voice;
    }

    speechSynthesis.speak(utterance);
  }

  function stopVoice() {
    speechSynthesis.cancel();
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: darkMode ? "#111827" : "#f8fafc",
        color: darkMode ? "white" : "#111827",
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

        <h1>⚙ Settings</h1>

        <button
          onClick={() =>
            alert("Settings Saved Successfully!")
          }
          style={{
            background: "#06b6d4",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          💾 Save
        </button>
      </div>

      {/* Voice Settings */}

      <div
        style={{
          background: "#1f2937",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "25px",
        }}
      >
        <h2>🎙 AI Voice</h2>

        <select
          value={selectedVoice}
          onChange={(e) => {
            setSelectedVoice(e.target.value);
            setVoice(e.target.value);
          }}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
            borderRadius: "10px",
            fontSize: "16px",
          }}
        >
          {voices.map((voice) => (
            <option
              key={voice.name}
              value={voice.name}
            >
              {voice.name}
            </option>
          ))}
        </select>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <button
            onClick={testVoice}
            style={{
              background: "#22c55e",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            ▶ Test Voice
          </button>

          <button
            onClick={stopVoice}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            ⏹ Stop
          </button>
        </div>
      </div>

      {/* Speech Rate */}

      <div
        style={{
          background: "#1f2937",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "25px",
        }}
      >
        <h2>⚡ Speech Speed</h2>

        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={speechRate}
          onChange={(e) =>
            setSpeechRate(Number(e.target.value))
          }
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        />

        <h3>{speechRate}x</h3>
      </div>

      {/* Speech Pitch */}

      <div
        style={{
          background: "#1f2937",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "25px",
        }}
      >
        <h2>🎵 Voice Pitch</h2>

        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={speechPitch}
          onChange={(e) =>
            setSpeechPitch(Number(e.target.value))
          }
          style={{
            width: "100%",
            marginTop: "20px",
          }}
        />

        <h3>{speechPitch}</h3>
      </div>

      {/* Theme */}

      <div
        style={{
          background: "#1f2937",
          padding: "25px",
          borderRadius: "15px",
          marginBottom: "25px",
        }}
      >
        <h2>🌙 Theme</h2>

        <label
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() =>
              setDarkMode(!darkMode)
            }
          />

          Enable Dark Mode
        </label>
      </div>

      {/* App Information */}

      <div
        style={{
          background: "#1f2937",
          padding: "25px",
          borderRadius: "15px",
        }}
      >
        <h2>ℹ About VoiceMentor AI</h2>

        <p style={{ marginTop: "15px" }}>
          Version : 1.0.0
        </p>

        <p style={{ marginTop: "10px" }}>
          AI English Speaking Coach
        </p>
        <p style={{ marginTop: "10px" }}>
        Developer Sharath.
        </p>

        <p style={{ marginTop: "10px" }}>
          Developed using React, Node.js,
          Firebase and Groq AI.
        </p>
      </div>
    </div>
  );
}