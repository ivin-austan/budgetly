import pool from "../Config/db.js";

export const AddExpenses = async (email, name, amount, mode, date) => {
  const { rows } = await pool.query(
    `INSERT INTO "Expenses" (email,"Date",name, "Payment Mode","amount")  VALUES ($1,TO_DATE($2, 'DD-MM-YYYY'),$3,$4,$5) RETURNING * `,
    [email, date, name, mode, amount]
  );
  return rows;
};
