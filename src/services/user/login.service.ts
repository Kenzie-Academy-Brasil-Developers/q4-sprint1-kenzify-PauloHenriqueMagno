import { Request } from "express";
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken'

import database from "../../database";
import { ErrorHandler } from "../../utils/error";
import { jwtConfig } from "../../configs/jwtConfig";

export const loginService = async (req: Request) => {
  const { username, password } = req.body;
  
  const user = database.users.find( anyUser => anyUser.username === username );
  
  if (!user) {
    throw new ErrorHandler(404, `Wrong credentials. Try again!`);
  };

  const match = await bcrypt.compare(password, user.password);
  
  if (!match) {
    throw new ErrorHandler(404, `Wrong credentials. Try again!`);
  };
  
  const token = jsonwebtoken.sign({
      username: user.username
    },
    jwtConfig.secret,
    { expiresIn: jwtConfig.expiresIn }
  );

  return token;
};
