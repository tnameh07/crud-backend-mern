import express from "express";
// import mongoose from "mongoose";
import { connectDB } from "./dbconnection/dbconnect.js";
import { router } from "./routes/router.js";

const app = express();
app.use(express.json());
app.use("/app/products", router);

const port = process.env.port || 3000;
connectDB();
// mongoose
//   .connect("mongodb://localhost:27017/weddingmanagment")
//   .then(() => {
//     console.log("Connected to database ");
//   })
//   .catch((error) => {
//     console.log("message", error);
//   });

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});
app.all("*", (req, res) => {
  res.status(404).send("Data not Found ");
});

app.listen(port, () => {
  console.log("Server started on port : ", port);
});
