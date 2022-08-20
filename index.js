import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

mongoose
  .connect(process.env.MONGO_URL, { serverSelectionTimeoutMS: 5000 })
  .then(() => console.log(`Connected to MONGODB`))
  .catch((error) => console.log(`Fail connect to MONGODB, ${error.message}`));

app.listen(8800, () => {
  console.log(`Backend server is running!`);
});
