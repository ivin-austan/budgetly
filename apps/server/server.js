import express from "express";
import userRoutes from "./Routes/UserRoutes.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("/users", userRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
