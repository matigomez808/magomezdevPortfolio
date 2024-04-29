import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

// Load the MongoDB Atlas URI from the environment variables
const uri = process.env.DATABASE_URL;

let cachedConnection = null;

async function connectToDatabase() {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    // Create a new Mongoose connection
    const connection = await mongoose.connect(uri, options);
    console.log("Connected to MongoDB Atlas!");

    // Cache the connection for later use
    cachedConnection = connection;
    return connection;
  } catch (error) {
    console.error("Failed to connect to MongoDB Atlas:", error);
    throw error;
  }
}

export default connectToDatabase;