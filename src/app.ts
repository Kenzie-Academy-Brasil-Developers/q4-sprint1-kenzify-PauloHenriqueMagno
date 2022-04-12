import express, { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';

import routes from './routes'
import { handleError } from './utils/error'

dotenv.config();

const app = express();

app.use(express.json());
app.use('', routes);
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  handleError(err, res);
});

export default app;