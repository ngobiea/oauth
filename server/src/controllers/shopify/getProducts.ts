import type { Request, Response, NextFunction } from 'express';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Shopify from 'shopify-node-api';
import CustomError from '../../utils/CustomError';
import { statusCode } from '../../utils/statusCode';

const { SHOPIFY_CLIENT_ID, SHOPIFY_CLIENT_SECRET, SHOPIFY_SHOP_NAME } =
  process.env as Record<string, string>;
export const getProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const token = req?.shopifyToken;

    if (!token) {
      throw new CustomError({
        message: 'Token not found.',
        statusCode: statusCode.UNAUTHORIZED,
      });
    }
    const shopifyClient = new Shopify({
      shop: SHOPIFY_SHOP_NAME,
      shopify_api_key: SHOPIFY_CLIENT_ID,
      shopify_shared_secret: SHOPIFY_CLIENT_SECRET,
      access_token: token,
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    shopifyClient.get('/admin/products.json', function (err, data, headers) {
      if (err) {
        throw new CustomError({
          message: 'Error getting product',
          statusCode: statusCode.INTERNAL_SERVER_ERROR,
        });
      }
      console.log(data);
      // Data contains product json information
      console.log(headers);
      // Headers returned from request
      res.status(statusCode.OK).json(data);
    });
  } catch (error) {
    const err = error as CustomError;
    if (!err.statusCode) {
      err.statusCode = statusCode.INTERNAL_SERVER_ERROR;
    }
    next(err);
  }
};
