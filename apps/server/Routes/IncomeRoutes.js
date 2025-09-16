import express from "express";
import { Addincome } from "../Controllers/UserIncome.js";

const router = express.Router();

router.post("/", Addincome);

export default router;
