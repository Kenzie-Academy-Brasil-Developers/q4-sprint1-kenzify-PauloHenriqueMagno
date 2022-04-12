import { Router } from 'express'

import {
  changePlaylistController,
  listenedByMePlusController,
  deleteSongController
} from '../../controllers/playlist';

import {
  validateShape,
  validateToken,
} from '../../middlewares';

import {
  createPlaylistShape
} from '../../shapes'

const playlistRoutes = Router();

playlistRoutes.put(
  '/playlist',
  validateToken,
  listenedByMePlusController,
  validateShape(createPlaylistShape),
  changePlaylistController
)

playlistRoutes.delete(
  '/playlist',
  validateToken,
  deleteSongController
)

export default playlistRoutes;