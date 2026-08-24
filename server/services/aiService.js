import Groq from "groq-sdk";

import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function askAI(messages, fileText = "") {
  try {
    console.log("====================================");
    console.log("AI SERVICE STARTED");
    console.log("====================================");

    console.log("Using Model: openai/gpt-oss-20b");

    let conversation = [
      {
        role: "system",
        content: `
You are VoiceMentor AI.

You are a professional English Speaking Coach.

Your responsibilities:
- Correct grammar politely.
- Explain mistakes simply.
- Improve vocabulary.
- Help with pronunciation.
- Conduct interview practice.
- Teach spoken English naturally.
- Continue conversations naturally.

Rules:
1. If uploaded document text exists, always use it.
2. Never say "I cannot see the image."
3. If OCR text exists, assume it came from the uploaded image.
4. Keep replies under 150 words.
5. End every reply with one follow-up question.
`,
      },
    ];

    if (fileText) {
      conversation.push({
        role: "system",
        content: fileText,
      });
    }

    conversation.push(...messages);

    console.log("Sending request to Groq...");

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: conversation,
      temperature: 0.7,
      max_tokens: 1024,
    });

    console.log("Groq Response Received");

    return completion.choices[0].message.content;
  } catch (error) {
    console.error("====================================");
    console.error("GROQ ERROR");
    console.error("====================================");

    console.error(error);

    if (error.status) {
      console.error("Status:", error.status);
    }

    if (error.message) {
      console.error("Message:", error.message);
    }

    if (error.response) {
      console.error("Response:");
      console.error(error.response.data);
    }

    throw error;
  }
}