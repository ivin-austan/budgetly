import express from "express";
import userRoutes from "./Routes/UserRoutes.js";
import dotenv from "dotenv";
import cors from "cors"
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
const allowedOrigins = ["http://localhost:5173"];

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/users", userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
