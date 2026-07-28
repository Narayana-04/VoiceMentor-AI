import mongoose from "mongoose";

const connectDB = async () => {
  console.log("Step 1: connectDB called");

  try {
    console.log("Step 2: URI exists:", !!process.env.MONGODB_URI);

    mongoose.set("strictQuery", true);

    console.log("Step 3: Connecting...");

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("✅ MongoDB Connected");
    console.log("Database:", conn.connection.name);
    console.log("Host:", conn.connection.host);

  } catch (err) {
    console.error("❌ Connection Error");
    console.error(err);
    process.exit(1);
  }
};

export default connectDB;