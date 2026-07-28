import express from "express";
import multer from "multer";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post("/chat", upload.single("file"), (req, res) => {
  console.log(req.file);
  console.log(req.body.message);

  res.json({
    reply: "File uploaded successfully!",
  });
});

export default router;