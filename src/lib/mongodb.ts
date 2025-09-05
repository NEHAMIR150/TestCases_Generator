import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI not set in .env.local");
}

let cached = (global as any).mongoose || { conn: null, promise: null };
(global as any).mongoose = cached;

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      dbName: "testcase",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
