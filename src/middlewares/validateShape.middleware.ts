import { NextFunction, Request, Response } from "express"
import { AnySchema } from 'yup';
import Lazy from "yup/lib/Lazy";

export const validateShape = (schema: AnySchema | Lazy<any>) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData = await schema.validate(req.body);

    req.body = userData;

    return next();
    
  } catch (e) {
    
    return res.status(400).send({ errors: e.errors[0]});
  };
};