import User from '../interfaces/user.interface';
import userModel from '../models/user.model';

const createUser = async (user: User): Promise<User> => {
  const userNew = await userModel.create(user);
  return userNew;
};

const userService = {
  createUser,
};

export default userService;