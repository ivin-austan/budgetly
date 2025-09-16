import pool from "../Config/db.js";
import { Hashpassword } from "../Utils/Hashpassword.js";

export const addUser = async (email, password) => {
  const hashedPassword = await Hashpassword(password);
  const { rows } = await pool.query(
    "INSERT INTO users (email,password) VALUES ($1, $2) RETURNING *",
    [email, hashedPassword]
  );
  return rows[0];
};

export const existing = async (email) => {
  const existing = await pool.query("SELECT * FROM users where email= $1", [
    email,
  ]);
  return existing.rows;
};
