import express from "express";
import multer from "multer";
import { chatWithAI } from "../controllers/chatController.js";

const router = express.Router();

const upload = multer({
  dest: "uploads/",
});

router.post(
  "/",
  upload.single("file"),
  chatWithAI
);

export default router;