import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("==================================");
  console.log("🚀 VoiceMentor AI Server Started");
  console.log(`🌍 Server: http://localhost:${PORT}`);
  console.log("==================================");
});