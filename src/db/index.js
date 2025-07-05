import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async () => {
 console.log("🟢 connectDB() function started");

  try {
    console.log("📡 Trying to connect to MongoDB...");

    const finalUri = `${process.env.MONGODB_URI}/${DB_NAME}`;
    console.log("🔗 Connecting to:", finalUri);

    const connectionInstance = await mongoose.connect(finalUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB connected !! Host: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
