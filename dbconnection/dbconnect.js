import mongoose from "mongoose";

const uri = "mongodb://localhost:27017/weddingmanagment";

const connectDB = () => {
  console.log("Connecting ");
  return mongoose
    .connect(uri)
    .then(() => {
      console.log("Connected to database ");
    })
    .catch((error) => {
      console.log("message", error);
    });
};

export { connectDB };
