// Import the mongoose package, which is an Object Data Modeling (ODM) library for MongoDB and Node.js
import mongoose from "mongoose";

// Retrieve the MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Check if there's a global cached connection, otherwise initialize it
// The 'global' object is used to store the cache so that it persists across function calls in a serverless environment
let cached = (global as any).mongoose || { conn: null, promise: null };

// Export an asynchronous function to connect to the MongoDB database
export const connectToDatabase = async () => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "eventify",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
