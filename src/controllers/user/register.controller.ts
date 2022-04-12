import { Request, Response } from "express";
import { registerService } from "../../services/user";

export const registerController = (req: Request, res: Response) => {
  const { password, ...newUser} = registerService(req)

  return res.status(201).json(newUser)
}