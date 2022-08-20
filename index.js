import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import helmet from "helmet";
import morgan from "morgan";
import userRoute from "./routes/users.js";
import authRoute from "./routes/auth.js";

const app = express();
const PORT = process.env.PORT || 6969;

// connection MongoDB
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to MONGODB`))
  .catch((error) => console.log(`Fail connect to MONGODB, ${error.message}`));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log(`Backend server is running on port: ${PORT}`);
});
