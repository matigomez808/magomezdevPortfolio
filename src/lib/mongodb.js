import mongoose from 'mongoose';

const uri = process.env.DATABASE_URL;

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

let cachedConnection = null;

async function connectToDatabase() {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    // Create a new Mongoose connection
    const connection = await mongoose.connect(uri, clientOptions);
    console.log("Connected to MongoDB!");

    // Cache the connection for later use
    cachedConnection = connection;
    return connection;
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    throw err;
  }
}

module.exports = connectToDatabase;