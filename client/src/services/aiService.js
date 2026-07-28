const API_URL = "http://localhost:5000/api/chat";

export async function askAI(messages, file = null) {
  try {
    const formData = new FormData();

    // Convert messages array to JSON string
    formData.append(
      "messages",
      JSON.stringify(messages)
    );

    // Attach file if selected
    if (file) {
      formData.append("file", file);
    }

    const response = await fetch(API_URL, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.error || "Failed to get AI response."
      );
    }

    return data.reply;

  } catch (error) {
    console.error("AI Service Error:", error);
    throw error;
  }
}