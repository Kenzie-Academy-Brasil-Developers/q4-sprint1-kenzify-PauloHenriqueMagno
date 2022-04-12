import { Request } from "express";
import database from "../../database";

export const registerService = (req: Request) => {
  const newUser = req.body

  database.users.push(newUser)

  return newUser
}