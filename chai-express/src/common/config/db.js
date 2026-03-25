import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(`${process.env.MONGO_URI}chai-code`);
    console.log(`MongoDB was Connect Successfully !!`, conn.connection.host);
  } catch (error) {
    console.log(`MongoDB Connection failed`, error);
  }
};

export { connectDB };
