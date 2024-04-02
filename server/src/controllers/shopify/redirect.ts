/* eslint-disable @typescript-eslint/ban-ts-comment */
import CustomError from '../../utils/CustomError';
import { statusCode } from '../../utils/statusCode';
import type { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { shopify } from '../../utils/shopify';
const { JWT_SECRET, JWT_EXPIRATION_TIME } = process.env as Record<
  string,
  string
>;
export const redirect = (req: Request, res: Response) => {
  // @ts-ignore
  shopify.exchange_temporary_token(req.query, (err, data) => {
    if (err) {
      throw new CustomError({
        message: 'Error exchanging temporary token',
        statusCode: statusCode.INTERNAL_SERVER_ERROR,
      });
    }
    // @ts-ignore
    const token = sign(
      {
        shop: data.shop,
        accessToken: data.access_token,
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRATION_TIME }
    );
    res.redirect('https://52.66.245.3:5173/shopify?token=' + token);
  });
};
