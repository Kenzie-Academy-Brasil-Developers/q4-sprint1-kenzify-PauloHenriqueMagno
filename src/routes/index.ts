import { Router } from 'express';

import userRoutes from './users';
import playlistRoutes from './playlists';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/users', playlistRoutes);

export default routes;