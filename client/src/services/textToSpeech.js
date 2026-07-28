let selectedVoice = null;

// =============================
// Load Voices
// =============================

export function loadVoices() {
  return new Promise((resolve) => {
    let voices = speechSynthesis.getVoices();

    if (voices.length) {
      resolve(voices);
    } else {
      speechSynthesis.onvoiceschanged = () => {
        resolve(speechSynthesis.getVoices());
      };
    }
  });
}

// =============================
// Select Voice
// =============================

export function setVoice(voiceName) {
  const voices = speechSynthesis.getVoices();

  selectedVoice = voices.find(
    (voice) => voice.name === voiceName
  );
}

// =============================
// Speak Text
// =============================

export function speak(text) {
  // Stop previous speech
  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.lang = "en-US";
  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;

  if (selectedVoice) {
    utterance.voice = selectedVoice;
  }

  speechSynthesis.speak(utterance);
}

// =============================
// Stop Speaking
// =============================

export function stopSpeaking() {
  speechSynthesis.cancel();
}

// =============================
// Pause Speaking
// =============================

export function pauseSpeaking() {
  speechSynthesis.pause();
}

// =============================
// Resume Speaking
// =============================

export function resumeSpeaking() {
  speechSynthesis.resume();
}

// =============================
// Check Speaking Status
// =============================

export function isSpeaking() {
  return speechSynthesis.speaking;
}