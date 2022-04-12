import { NextFunction, Request, Response } from "express";
import database from "../database";
import { ErrorHandler } from "../utils/error";

export const checkDuplicateUsername = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username } = req.body;

    const hasBeenTaken = database.users.some( anyUser => anyUser.username === username );

    if (hasBeenTaken) {
      throw new ErrorHandler(422, `You can not use this username.`);
    };
    
    return next()
  } catch (e) {
    return next(e)
  }
}