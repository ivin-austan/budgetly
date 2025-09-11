import express from "express";
import { authUser, createUser } from "../Controllers/UserController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", authUser);

export default router;
