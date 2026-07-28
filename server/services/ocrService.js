import Tesseract from "tesseract.js";

export async function extractTextFromImage(filePath) {
  try {
    const {
      data: { text },
    } = await Tesseract.recognize(
      filePath,
      "eng",
      {
        logger: (m) => {
          console.log(m);
        },
      }
    );

    return {
      success: true,
      text,
    };

  } catch (error) {

    console.error("OCR Error:", error);

    return {
      success: false,
      text: "",
      error: error.message,
    };

  }
}