import { Router } from 'express'

import {
  getUsersController,
  registerController,
  loginController,
} from '../../controllers/user';

import {
  validateToken,
  validateShape,
  checkDuplicateUsername,
  hashPassword
} from '../../middlewares';

import {
  registerShape,
  loginShape
} from '../../shapes' 

const userRoutes = Router();

userRoutes.get(
  '',
  validateToken,
  getUsersController
);

userRoutes.post(
  '/register',
  validateShape(registerShape),
  checkDuplicateUsername,
  hashPassword,
  registerController
)

userRoutes.post(
  '/login',
  validateShape(loginShape),
  loginController
)

export default userRoutes;