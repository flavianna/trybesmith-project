import { Request, Response } from 'express';
import userService from '../services/user.service';
import generateToken from '../middlewares/auth';

const createUser = async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);
  const token = generateToken(user);
  return res.status(201).json({ token });
};

const userController = {
  createUser,
};

export default userController;