import { ResultSetHeader } from 'mysql2';
import User from '../interfaces/user.interface';
import connection from './connection';

const create = async (user: User): Promise<User> => {
  const { username, vocation, level, password } = user;
  const [{ insertId }] = await connection
    .query<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return { id: insertId, ...user };
};

const userModel = {
  create,
};

export default userModel;