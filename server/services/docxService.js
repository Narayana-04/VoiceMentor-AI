import fs from "fs";
import mammoth from "mammoth";

// ==============================
// Read DOCX File
// ==============================

export async function readDOCX(filePath) {
  try {
    // Read DOCX and extract plain text
    const result = await mammoth.extractRawText({
      path: filePath,
    });

    return {
      success: true,
      text: result.value,
      warnings: result.messages,
    };
  } catch (error) {
    console.error("DOCX Read Error:", error);

    return {
      success: false,
      text: "",
      warnings: [],
      error: error.message,
    };
  }
}