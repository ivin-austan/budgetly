import bcrypt from "bcrypt";
const saltRounds = 10;

export function Hashpassword(password) {
  return bcrypt.hash(password, saltRounds);
}
