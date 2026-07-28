const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

export function startListening(onResult, onEnd) {
  if (!SpeechRecognition) {
    alert("Speech Recognition is not supported");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    console.log("🎤 Listening...");
  };

  recognition.onspeechstart = () => {
    console.log("🗣 Speech detected");
  };

  recognition.onspeechend = () => {
    console.log("🛑 Speech ended");
  };

  recognition.onresult = (event) => {
    console.log(event);

    const text = event.results[0][0].transcript;

    console.log("✅ You said:", text);

    onResult(text);
  };

  recognition.onerror = (event) => {
    console.log("❌ Error:", event.error);

    if (onEnd) onEnd();
  };

  recognition.onend = () => {
    console.log("🏁 Recognition finished");

    if (onEnd) onEnd();
  };

  recognition.start();
}