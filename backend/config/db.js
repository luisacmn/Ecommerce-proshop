import mongoose from "mongoose";

const conectDB = async () => {
  try {
    const newConnection = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${newConnection.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default conectDB;
