import fs from "fs";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

// =====================================
// Read PDF
// =====================================

export async function readPDF(filePath) {
  try {
    const data = new Uint8Array(
      fs.readFileSync(filePath)
    );

    const pdf =
      await pdfjsLib.getDocument({
        data,
      }).promise;

    let text = "";

    for (
      let pageNum = 1;
      pageNum <= pdf.numPages;
      pageNum++
    ) {
      const page = await pdf.getPage(pageNum);

      const content =
        await page.getTextContent();

      const pageText =
        content.items
          .map((item) => item.str)
          .join(" ");

      text += pageText + "\n\n";
    }

    return {
      success: true,
      text,
      pages: pdf.numPages,
    };

  } catch (error) {

    console.error(
      "PDF Read Error:",
      error
    );

    return {
      success: false,
      text: "",
      pages: 0,
      error: error.message,
    };

  }
}