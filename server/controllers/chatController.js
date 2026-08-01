import fs from "fs";
import path from "path";

import { askAI } from "../services/aiService.js";

import { readPDF } from "../services/pdfService.js";
import { readDOCX } from "../services/docxService.js";
import { readImage } from "../services/imageService.js";
import { extractTextFromImage } from "../services/ocrService.js";

export const chatWithAI = async (req, res) => {
  try {
    console.log("====================================");
    console.log("🚀 NEW CHAT REQUEST");
    console.log("====================================");

    let messages = req.body.messages;

    if (!messages) {
      return res.status(400).json({
        success: false,
        error: "Messages are required.",
      });
    }

    if (typeof messages === "string") {
      messages = JSON.parse(messages);
    }

    console.log("Messages:");
    console.log(messages);

    let fileText = "";

    // ==========================
    // Handle Uploaded File
    // ==========================

    if (req.file) {
      const filePath = req.file.path;

      const extension = path
        .extname(req.file.originalname)
        .toLowerCase();

      console.log("Uploaded File:", req.file.originalname);

      // PDF
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

      // DOCX
      else if (extension === ".docx") {
        const doc = await readDOCX(filePath);

        if (doc.success) {
          fileText = `
The user uploaded a DOCX.

Document Content:

${doc.text}
`;
        }
      }

      // IMAGE
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

OCR Text:

${ocr.text}
`;
          } else {
            fileText = `
The user uploaded an image.

No readable text found.
`;
          }
        }
      }

      try {
        fs.unlinkSync(filePath);
      } catch (err) {
        console.error("Delete File Error:", err);
      }
    }

    console.log("Calling AI Service...");

    const reply = await askAI(messages, fileText);

    console.log("AI Reply:");
    console.log(reply);

    return res.json({
      success: true,
      reply,
    });
  } catch (error) {
    console.error("====================================");
    console.error("CHAT CONTROLLER ERROR");
    console.error(error);
    console.error("====================================");

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};