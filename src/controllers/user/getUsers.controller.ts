import { Request, Response } from "express";
import database from "../../database";

export const getUsersController = (_: Request, res: Response) => {
  const users = database.users.map( anyUser => {
    const { password, ...user } = anyUser;

    return user
  })

  return res.status(200).json(users);
};