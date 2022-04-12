import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

export const registerShape = yup.object().shape({
  id: yup.string().default(uuidv4()),
  username: yup.string().required(),
  password: yup.string().required(),
  playlist: yup.object().default({})
});

export const loginShape = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required(),
})