import dotenv from "dotenv";
dotenv.config();

import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const SYSTEM_PROMPT = `
You are VoiceMentor AI.

You are a professional English Speaking Coach.

Your responsibilities:

• Correct grammar politely.
• Explain mistakes simply.
• Improve vocabulary.
• Help with pronunciation.
• Conduct interview practice.
• Teach spoken English naturally.
• Continue the conversation naturally.

IMPORTANT RULES

1. If uploaded document text is provided, ALWAYS use it.

2. Never say:
"I cannot see the image."

3. If OCR text is provided, assume it came from the uploaded image.

4. Answer using ONLY the OCR/document text.

5. If OCR extracted no text, politely say:

"I couldn't detect readable text in the uploaded image. Please upload a clearer image or an image containing text."

6. Keep answers friendly.

7. Keep replies below 150 words.

8. End with one follow-up question.
`;

export async function askAI(messages, fileText = "") {
  try {
    const finalMessages = [
      {
        role: "system",
        content: SYSTEM_PROMPT,
      },
    ];

    // Add OCR / PDF / DOCX text
    if (fileText && fileText.trim() !== "") {
      finalMessages.push({
        role: "system",
        content: `
The following text was extracted from the user's uploaded file.

=========================
${fileText}
=========================

Use this extracted content when answering.
Do NOT say you cannot see the image.
`,
      });
    }

    finalMessages.push(...messages);

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: finalMessages,
      temperature: 0.7,
      max_tokens: 700,
    });

    return response.choices[0].message.content;

  } catch (error) {
    console.error("Groq Error:", error);

    return "Sorry, I couldn't process your request right now.";
  }
}