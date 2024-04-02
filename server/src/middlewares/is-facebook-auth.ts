import jwt, { type JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import CustomError from '../utils/CustomError';
const { JWT_SECRET } = process.env as Record<string, string>;
import { statusCode } from '../utils/statusCode';

const authFacebook = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
      throw new CustomError({
        message: 'Authorization header not found.',
        statusCode: statusCode.UNAUTHORIZED,
      });
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
      throw new CustomError({
        message: 'Token not found.',
        statusCode: statusCode.UNAUTHORIZED,
      });
    }

    const decodedToken = jwt.verify(token, JWT_SECRET) as JwtPayload;

    if (!decodedToken?.accessToken) {
      throw new CustomError({
        message: 'Invalid token.',
        statusCode: 401,
      });
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    req.facebookToken = decodedToken.accessToken;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    req.userId = decodedToken.userId;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    req.FaceBookAccountId = decodedToken.id;
    next();
  } catch (err) {
    next(err);
  }
};

export default authFacebook;
