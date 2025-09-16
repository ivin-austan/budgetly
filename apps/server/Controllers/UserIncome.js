import { AddIncome } from "../Models/userIncome.js";
import { existing } from "../Models/UserModel.js";

export const Addincome = async (req, res) => {
  const { value } = req.body;

  const hasAccount = await existing(value.email);
  if (hasAccount.length == 0) {
    return res.status(401).json(" User not found!!");
  }
  try {
    const addedincome = await AddIncome(
      value.email,
      value.name,
      value.amount,
      value.date
    );

    res.json(addedincome);
  } catch (er) {
    res.status(500).json({ error: er.message });
  }
};
