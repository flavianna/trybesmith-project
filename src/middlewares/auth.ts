import jwt, { Secret, SignOptions } from 'jsonwebtoken';
import User from '../interfaces/user.interface';

const secretKey: Secret = process.env.JWT_SECRET || 'JWT_SECRET';

const config: SignOptions = {
  expiresIn: '3m',
  algorithm: 'HS256',
};

function generateToken(payload: User) {
  return jwt.sign({
    data: {
      username: payload.username,
      vocation: payload.vocation,
      level: payload.level,
    },
  }, secretKey, config);
}

export default generateToken;