import {
  Request, Response 
} from 'express';
import {
  loginUser, registerNewUser 
} from '../services/auth.service';

const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginCtrl = async ({ body }: Request, res: Response) => {
  const {
    email, password 
  } = body;
  const responseUser = await loginUser({
    email,
    password 
  });

  if (responseUser === 'ERROR') {
    return res.status(403).send(responseUser);
  }

  res.send(responseUser);
};

export {
  registerCtrl, loginCtrl 
};