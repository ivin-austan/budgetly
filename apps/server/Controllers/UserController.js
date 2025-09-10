import { addUser } from "../Models/UserModel.js";

export const createUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await addUser({ email, password });
    res.json(user);
  } catch (er) {
    res.status(500).json({ error: er.message });
  }
};
