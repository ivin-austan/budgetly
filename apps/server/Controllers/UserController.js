import { addUser, existing } from "../Models/UserModel.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await addUser({ email, password });
    res.json(user);
  } catch (er) {
    res.status(500).json({ error: er.message });
  }
};

export const authUser = async (req, res) => {
  const { email, password } = req.body;

  const hasAccount = await existing(email);
  let user = hasAccount[0];
  try {
    if (hasAccount.length === 0) {
      res.status(401).json("User not Registered!");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json("Invalid Credentials!");
    }
    res.json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ error: er.message });
  }
};
