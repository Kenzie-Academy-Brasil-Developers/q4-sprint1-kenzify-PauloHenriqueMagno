import { NextFunction, Request, Response } from "express";

import database from "../../database";
import {
  ISong
} from '../../interfaces'

export const listenedByMePlusController = (req: Request, res: Response, next: NextFunction) => {
  const { artist, song } = req.query;

  if (!artist && !song) {
    return next();
  };

  try {
    const userIndex = database.users.findIndex( anyUser => anyUser.username === req.username );

    const user = database.users[userIndex]

    const songIndex = user.playlist[artist.toString()].findIndex( (anySong: ISong) => anySong.title === song.toString() );

    user.playlist[artist.toString()][songIndex].listenedByMe++

    return res.status(200).json(user.playlist[artist.toString()][songIndex]);

  } catch (e) {
    return next(e)
  };
}