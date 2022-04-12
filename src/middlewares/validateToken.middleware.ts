import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { jwtConfig } from "../configs/jwtConfig";

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ message: "missing header authorization." });
  }

  const token = req.headers.authorization.split(" ")[1];

  jwt.verify(token, jwtConfig.secret, (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: "invalid token." });
    };

    req.username = decoded.username;

    return next();
  });
};