import { useState, useEffect, useRef } from "react";

import {
  FiSend,
  FiMic,
  FiPlus,
} from "react-icons/fi";

import {
  askAI,
} from "../services/aiService";

import {
  startListening,
} from "../services/speechService";

import {
  speak,
  stopSpeaking,
  loadVoices,
  setVoice,
} from "../services/textToSpeech";

import {
  saveMessage,
  loadMessages,
  clearMessages,
} from "../services/chatService";

export default function VoiceChat() {

  console.log("NEW VOICECHAT LOADED");

  // =============================
  // States
  // =============================

  const [message, setMessage] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  const [voices, setVoices] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const [listening, setListening] =
    useState(false);

  const [selectedFile, setSelectedFile] =
    useState(null);

  // =============================
  // Refs
  // =============================

  const bottomRef = useRef(null);

  const textareaRef = useRef(null);

  const fileRef = useRef(null);

  // =============================
  // Welcome Message
  // =============================

  const welcomeMessage = {
    role: "assistant",
    text:
      "Hello! 👋 I'm VoiceMentor AI. I'm here to help you improve your English speaking, grammar, pronunciation, vocabulary, interviews and confidence. How can I help you today?",
  };

  // =============================
  // Load Chat History
  // =============================

  useEffect(() => {

    async function loadHistory() {

      try {

        const history =
          await loadMessages();

        if (
          history &&
          history.length > 0
        ) {
          setMessages(history);
        }

        else {

          setMessages([
            welcomeMessage,
          ]);

        }

      }

      catch (err) {

        console.error(err);

        setMessages([
          welcomeMessage,
        ]);

      }

    }

    loadHistory();

  }, []);

  // =============================
  // Load Voices
  // =============================

  useEffect(() => {

    async function getVoices() {

      const list =
        await loadVoices();

      setVoices(list);

    }

    getVoices();

  }, []);

  // =============================
  // Auto Scroll
  // =============================

  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages]);

  // =============================
  // Auto Grow Textarea
  // =============================

  function handleInput(e) {

    setMessage(e.target.value);

    e.target.style.height = "auto";

    e.target.style.height =
      e.target.scrollHeight + "px";

  }

  // =============================
  // Enter to Send
  // Shift + Enter = New Line
  // =============================

  function handleKeyDown(e) {

    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {

      e.preventDefault();

      sendMessage();

    }

  }
    // =============================
  // Send Message
  // =============================

  async function sendMessage(text = message) {

    if (!text.trim() && !selectedFile) return;

    const userMessage = {
      role: "user",
      text,
    };

    const updatedHistory = [
      ...messages,
      userMessage,
    ];

    setMessages(updatedHistory);

    try {

      await saveMessage(
        "user",
        text
      );

    } catch (err) {
      console.error(err);
    }

    setMessage("");

    setSelectedFile(null);

    if (textareaRef.current) {
      textareaRef.current.style.height =
        "45px";
    }

    setLoading(true);

    try {

      const aiMessages =
        updatedHistory.map((msg) => ({
          role: msg.role,
          content: msg.text,
        }));

      const aiReply = await askAI(
    aiMessages,
    selectedFile
);

      const assistantMessage = {
        role: "assistant",
        text: aiReply,
      };

      setMessages((prev) => [
        ...prev,
        assistantMessage,
      ]);

      try {

        await saveMessage(
          "assistant",
          aiReply
        );

      } catch (err) {
        console.error(err);
      }

      speak(aiReply);

    } catch (err) {

      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "Sorry, something went wrong.",
        },
      ]);

    } finally {

      setLoading(false);

    }

  }

  // =============================
  // Microphone
  // =============================

  function handleMic() {

    setListening(true);

    startListening(

      async (speechText) => {

        setListening(false);

        setMessage(speechText);

        await sendMessage(
          speechText
        );

      },

      () => {

        setListening(false);

      }

    );

  }

  // =============================
  // Stop AI Voice
  // =============================

  function stopVoice() {

    stopSpeaking();

  }

  // =============================
  // New Chat
  // =============================

  async function newChat() {

    try {

      await clearMessages();

    } catch (err) {

      console.error(err);

    }

    setMessages([
      welcomeMessage,
    ]);

    setMessage("");

    setSelectedFile(null);

  }

  // =============================
  // File Upload
  // =============================

  function openFilePicker() {

    fileRef.current.click();

  }

  function handleFile(e) {

    const file =
      e.target.files[0];

    if (!file) return;

    setSelectedFile(file);

  }

  // =============================
  // Remove Selected File
  // =============================

  function removeFile() {

    setSelectedFile(null);

    if (fileRef.current) {

      fileRef.current.value = "";

    }

  }

  // =============================
  // Voice Selection
  // =============================

  function handleVoiceChange(e) {

    setVoice(
      e.target.value
    );

  }

  // =============================
  // Start UI
  // =============================

  return (

    <div
      style={{
        background: "#111827",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >

          {/* ============================
          Header
      ============================ */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 25px",
          borderBottom: "1px solid #374151",
          background: "#1f2937",
        }}
      >
        <div>
          <h2
            style={{
              margin: 0,
              fontSize: "28px",
            }}
          >
            🎤 VoiceMentor AI
          </h2>

          <p
            style={{
              margin: "6px 0 0",
              color: "#9ca3af",
              fontSize: "14px",
            }}
          >
            Practice English with AI
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <select
            onChange={handleVoiceChange}
            style={{
              padding: "10px",
              borderRadius: "10px",
              background: "#111827",
              color: "white",
              border: "1px solid #374151",
            }}
          >
            <option>Select Voice</option>

            {voices.map((voice) => (
              <option
                key={voice.name}
                value={voice.name}
              >
                {voice.name}
              </option>
            ))}
          </select>

          <button
            onClick={stopVoice}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            🔇 Stop
          </button>

          <button
            onClick={newChat}
            style={{
              background: "#06b6d4",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            ➕ New Chat
          </button>
        </div>
      </div>

      {/* ============================
          Chat Area
      ============================ */}

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                msg.role === "user"
                  ? "flex-end"
                  : "flex-start",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                maxWidth: "80%",
              }}
            >
              {msg.role === "assistant" && (
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "#06b6d4",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "22px",
                  }}
                >
                  🤖
                </div>
              )}

              <div
                style={{
                  background:
                    msg.role === "user"
                      ? "#06b6d4"
                      : "#1f2937",

                  padding: "16px",

                  borderRadius: "18px",

                  color: "white",

                  lineHeight: "1.7",

                  whiteSpace: "pre-wrap",

                  wordBreak: "break-word",
                }}
              >
                {msg.text}
              </div>

              {msg.role === "user" && (
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "#374151",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "20px",
                  }}
                >
                  👤
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                background: "#06b6d4",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "22px",
              }}
            >
              🤖
            </div>

            <div
              style={{
                background: "#1f2937",
                padding: "15px 20px",
                borderRadius: "18px",
              }}
            >
              Thinking...
            </div>
          </div>
        )}

        <div ref={bottomRef}></div>
      </div>

            {/* ============================
          Selected File
      ============================ */}

      {selectedFile && (
        <div
          style={{
            padding: "10px 20px",
            background: "#1f2937",
            borderTop: "1px solid #374151",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span>
            📎 {selectedFile.name}
          </span>

          <button
            onClick={removeFile}
            style={{
              background: "#ef4444",
              color: "white",
              border: "none",
              padding: "6px 12px",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Remove
          </button>
        </div>
      )}

      {/* ============================
          Hidden File Input
      ============================ */}

      <input
        ref={fileRef}
        type="file"
        hidden
        onChange={handleFile}
      />

      {/* ============================
          ChatGPT Input Area
      ============================ */}

      <div
        style={{
          padding: "20px",
          borderTop: "1px solid #374151",
          background: "#111827",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "10px",
            background: "#1f2937",
            border: "1px solid #374151",
            borderRadius: "28px",
            padding: "12px 18px",
          }}
        >
          {/* Attachment */}

          <button
            onClick={openFilePicker}
            style={{
              background: "transparent",
              border: "none",
              color: "white",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            <FiPlus />
          </button>

          {/* Text Area */}

          <textarea
            ref={textareaRef}
            rows={1}
            value={message}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Type or speak your English..."
            style={{
              flex: 1,
              resize: "none",
              background: "transparent",
              color: "white",
              border: "none",
              outline: "none",
              fontSize: "17px",
              maxHeight: "180px",
              overflowY: "auto",
              lineHeight: "1.6",
            }}
          />

          {/* Mic */}

          <button
            onClick={handleMic}
            style={{
              background: "transparent",
              border: "none",
              color: listening
                ? "#06b6d4"
                : "white",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            <FiMic />
          </button>

          {/* Send */}

          <button
            onClick={() => sendMessage()}
            disabled={loading}
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              border: "none",
              background: loading
                ? "#4b5563"
                : "#06b6d4",
              color: "white",
              cursor: loading
                ? "not-allowed"
                : "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "20px",
            }}
          >
            <FiSend />
          </button>
        </div>

        <div
          style={{
            marginTop: "10px",
            textAlign: "center",
            color: "#9ca3af",
            fontSize: "13px",
          }}
        >
          Press <b>Enter</b> to send •
          <b> Shift + Enter</b> for a new line •
          Click 🎤 to speak
        </div>
      </div>

    </div>

  );
}