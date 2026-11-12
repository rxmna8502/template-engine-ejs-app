import mongoose from "mongoose";

const connectDB = async (mongoURI, dbName) => {
  try {
    await mongoose.connect(mongoURI, {
      dbName: dbName,
    });
    console.log(`MongoDB connected to database: ${dbName}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

export default connectDB;
