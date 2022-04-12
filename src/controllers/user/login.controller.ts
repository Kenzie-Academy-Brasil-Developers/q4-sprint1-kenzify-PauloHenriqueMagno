import { NextFunction, Request, Response } from "express";
import { loginService } from "../../services/user";

export const loginController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await loginService(req);

    return res.status(200).json({ accessToken: token });

  } catch (e) {
    return next(e);
  };
};