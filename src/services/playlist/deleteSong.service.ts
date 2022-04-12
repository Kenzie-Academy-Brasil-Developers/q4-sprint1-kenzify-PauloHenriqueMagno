import { Request } from "express";
import database from "../../database";
import { ISong, IUser } from "../../interfaces";
import { ErrorHandler } from "../../utils/error";

export const deleteSongService = (req: Request) => {
  const { artist, song } = req.query;

  const userIndex = database.users.findIndex( anyUser => anyUser.username === req.username );

  if (userIndex === -1) {
    throw new ErrorHandler(404, "user not found");
  };

  const user: IUser = database.users[userIndex]

  const playlist = user.playlist[artist.toString()] || undefined

  if (!playlist) {
    throw new ErrorHandler(404, "playlist not found");
  };

  const songIndex = playlist.findIndex(({title}: ISong) => title === song.toString())

  if (songIndex === -1) {
    throw new ErrorHandler(404, "song not found");
  };

  database.users[userIndex].playlist[artist.toString()].splice(songIndex, 1);
}