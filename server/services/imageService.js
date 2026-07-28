import fs from "fs";
import path from "path";
import mime from "mime-types";

// ==============================
// Read Image File
// ==============================

export async function readImage(filePath) {
  try {
    // Check file exists
    if (!fs.existsSync(filePath)) {
      return {
        success: false,
        error: "Image file not found.",
      };
    }

    // Read image as Base64
    const imageBuffer = fs.readFileSync(filePath);

    const base64Image = imageBuffer.toString("base64");

    // Detect MIME type
    const mimeType =
      mime.lookup(filePath) || "image/jpeg";

    return {
      success: true,
      fileName: path.basename(filePath),
      mimeType,
      base64: base64Image,
    };
  } catch (error) {
    console.error("Image Read Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
}