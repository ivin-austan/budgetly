import { AddExpenses } from "../Models/UserExpenses.js";
import { existing } from "../Models/UserModel.js";

export const AddExpense = async (req, res) => {
  const { value } = req.body;

  const hasAccount = await existing(value.email);
  if (hasAccount.length == 0) {
    return res.status(401).json(" User not found!!");
  }
  try {
    const addedexpense = await AddExpenses(
      value.email,
      value.name,
      value.amount,
      value.mode,
      value.date
    );

    res.json(addedexpense);
  } catch (er) {
    res.status(500).json({ error: er.message });
  }
};
