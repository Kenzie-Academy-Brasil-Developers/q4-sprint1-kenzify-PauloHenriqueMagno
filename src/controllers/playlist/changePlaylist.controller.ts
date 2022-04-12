import { Request, Response } from "express";
import database from "../../database";

export const changePlaylistController = (req: Request, res: Response) => {
  const { password, ...user} = database.users.find(anyUser => anyUser.username === req.username);

  user.playlist = req.body;

  const userIndex = database.users.findIndex(anyUser => anyUser.username === user.username);

  database.users[userIndex].playlist = user.playlist;

  return res.status(200).json(user);
};