import pool from "../Config/db.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
export const addUser = async ({ email, password }) => {
  const existing = await pool.query("SELECT * FROM users where email= $1", [
    email,
  ]);
  if (existing.rows.length > 0) {
    throw new Error("User already exists");
  }
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const { rows } = await pool.query(
    "INSERT INTO users (email,password) VALUES ($1, $2) RETURNING *",
    [email, hashedPassword]
  );
  return rows[0];
};
