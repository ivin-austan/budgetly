import { addUser, existing } from "../Models/UserModel.js";
import bcrypt from "bcrypt";

export const createUser = async (req, res) => {
  const { value } = req.body;
  const hasAccount = await existing(value.email);
  if (hasAccount.length > 0) {
    return res.status(401).json(" User already Exists!!");
  }
  try {
    const user = await addUser(value.email, value.password);
    res.json(user);
  } catch (er) {
    res.status(500).json({ error: er.message });
  }
};

export const authUser = async (req, res) => {
  const { value } = req.body;

  const hasAccount = await existing(value.email);
  let user = hasAccount[0];
  try {
    if (hasAccount.length === 0) {
      res.status(401).json("User not Registered!");
    }
    const isMatch = await bcrypt.compare(value.password, user.password);
    if (!isMatch) {
      return res.status(401).json("Invalid Credentials!");
    }
    res.json({ message: "Login successful", user });
  } catch (er) {
    res.status(500).json({ error: er.message });
  }
};
