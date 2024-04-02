import type { Request, Response } from 'express';
// import { statusCode } from '../../utils/statusCode';
// import CustomError from '../../utils/CustomError';
// import { sign } from 'jsonwebtoken';
// const { JWT_SECRET, JWT_EXPIRATION_TIME } = process.env as Record<
//   string,
//   string
//     >;

export const redirect = (_req: Request, res: Response) => {
  res.redirect('https://52.66.245.3:5173/linkedin??linkedin=success');
};
