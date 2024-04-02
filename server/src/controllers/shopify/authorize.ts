import type { Request, Response} from 'express';

import { shopify } from '../../utils/shopify';
import { statusCode } from '../../utils/statusCode';

export const authorizeShopify = (_req: Request, res: Response) => {
  const authURL = shopify.buildAuthURL();
  res.status(statusCode.OK).json(authURL);
};
