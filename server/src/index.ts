import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose.connect(process.env.MONGODB as string).then(() => {
  console.log("Connected to DB!");
});

const app = express();

app.use(express.json());
app.use(cors());
// {
//   origin: `${process.env.CLIENT_BASE_URL}`,
// }

app.use("/api/my/user", myUserRoute);

app.listen(7001, () => {
  console.log("Server started at localhost:7001!");
});
