import pool from "../Config/db.js";

export const AddIncome = async (email, name, amount, date) => {
  const { rows } = await pool.query(
    `INSERT INTO "Income" (email,"date",name,"amount")  VALUES ($1,TO_DATE($2, 'DD-MM-YYYY'),$3,$4) RETURNING * `,
    [email, date, name, amount]
  );
  return rows;
};
