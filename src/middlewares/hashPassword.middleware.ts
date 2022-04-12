import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt';

export const hashPassword = async (req: Request, res: Response, next: NextFunction) => {
  req.body.password = await bcrypt.hash(req.body.password, 10);

  return next();
}