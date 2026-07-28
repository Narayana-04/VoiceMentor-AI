import fs from "fs";
import path from "path";

import { askAI } from "../services/aiService.js";

import { readPDF } from "../services/pdfService.js";
import { readDOCX } from "../services/docxService.js";
import { readImage } from "../services/imageService.js";
import { extractTextFromImage } from "../services/ocrService.js";


export const chatWithAI = async (req, res) => {
  try {
    // =============================
    // Read Messages
    // =============================

    let messages = req.body.messages;

    if (!messages) {
      return res.status(400).json({
        success: false,
        error: "Messages are required.",
      });
    }

    // FormData sends messages as string
    if (typeof messages === "string") {
      messages = JSON.parse(messages);
    }

    let fileText = "";

    // =============================
    // File Upload
    // =============================

    if (req.file) {
      const filePath = req.file.path;

      const extension = path
        .extname(req.file.originalname)
        .toLowerCase();

      console.log("Uploaded File:", req.file.originalname);

      // -----------------------------
      // PDF
      // -----------------------------

      if (extension === ".pdf") {
        const pdf = await readPDF(filePath);

        if (pdf.success) {
          fileText = `
The user uploaded a PDF.

Document Content:

${pdf.text}
`;
        }
      }

      // -----------------------------
      // DOCX
      // -----------------------------

      else if (extension === ".docx") {
        const doc = await readDOCX(filePath);

        if (doc.success) {
          fileText = `
The user uploaded a DOCX document.

Document Content:

${doc.text}
`;
        }
      }

      // -----------------------------
      // IMAGE
      // -----------------------------

      else if (
        extension === ".jpg" ||
        extension === ".jpeg" ||
        extension === ".png" ||
        extension === ".webp"
      ) {
        const image = await readImage(filePath);

        if (image.success) {
          const ocr = await extractTextFromImage(filePath);

          if (ocr.success && ocr.text.trim() !== "") {
            fileText = `
The user uploaded an image.

OCR Extracted Text:

${ocr.text}
`;
          } else {
            fileText = `
The user uploaded an image.

No readable text was found in the image.
`;
          }
        }
      }

      // -----------------------------
      // Delete uploaded file
      // -----------------------------

      try {
        fs.unlinkSync(filePath);
      } catch (err) {
        console.error("Delete File Error:", err);
      }
    }

    // =============================
    // Ask Groq
    // =============================

    const reply = await askAI(messages, fileText);

    return res.json({
      success: true,
      reply,
    });

  } catch (error) {
    console.error("Chat Controller Error:", error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};