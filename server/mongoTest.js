import dotenv from "dotenv";
dotenv.config();

import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

try {
  console.log("Connecting...");

  await client.connect();

  console.log("✅ Connected");

  await client.close();

} catch (err) {
  console.error(err);
}