import User from '../../models/User';
import { validationResult } from 'express-validator';
import type { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import CustomError from '../../utils/CustomError';
import { statusCode } from '../../utils/statusCode';
import { createAccount } from './createAccount';

const { JWT_SECRET, JWT_EXPIRATION_TIME } = process.env as Record<
  string,
  string
>;

export default async function postLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
      const errors = validationResult(req);
      console.log(req.body, 'line 41');
    if (!errors.isEmpty()) {
      throw new CustomError({
        message: 'Invalid inputs passed, please check your data.',
        statusCode: statusCode.BAD_REQUEST,
      });
    }

    const { email, accessToken ,id} = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      user = await createAccount(req);
      if (!user) {
        throw new CustomError({
          message: 'Failed to create user account.',
          statusCode: statusCode.INTERNAL_SERVER_ERROR,
        });
      }
    }

    const token = sign(
      {
        userId: user._id.toString(),
        accessToken,
        id,
      },
      JWT_SECRET,
      {
        expiresIn: JWT_EXPIRATION_TIME,
      }
    );

    res.status(statusCode.OK).json({ token, user });
  } catch (error) {
    const err = error as CustomError;
    if (!err.statusCode) {
      err.statusCode = statusCode.INTERNAL_SERVER_ERROR;
    }
    next(err);
  }
}
