import express from "express";
import { AddExpense } from "../Controllers/UserExpenses.js";

const router = express.Router();

router.post("/", AddExpense);

export default router;
