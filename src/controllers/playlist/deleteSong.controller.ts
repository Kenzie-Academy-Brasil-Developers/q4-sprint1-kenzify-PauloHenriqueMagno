import { NextFunction, Request, Response } from "express";
import { deleteSongService } from "../../services/playlist";

export const deleteSongController = (req: Request, res: Response, next: NextFunction) => {  
  try {
    deleteSongService(req);

    return res.status(204).json();
  } catch (e) {
    return next(e)
  };
};