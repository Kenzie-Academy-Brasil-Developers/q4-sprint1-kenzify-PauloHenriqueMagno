import dotenv from 'dotenv';

dotenv.config();

export const jwtConfig: { secret: any; expiresIn: string | number } = {
  secret: process.env.JWT_SECRET,
  expiresIn: process.env.JWT_EXPIRES_IN
}