import { Router } from 'express';

import {
  authorizeShopify,
  redirect,
  getProducts,
  getOrders,
} from '../controllers/shopify/index';
import authShopify from '../middlewares/is-shopify-auth';

const shopifyRouter = Router();

shopifyRouter.get('/authShopify', authorizeShopify);
shopifyRouter.get('/api/shopify/redirect', redirect);
shopifyRouter.get('/api/shopify/products', authShopify, getProducts);
shopifyRouter.get('/api/shopify/orders', authShopify, getOrders);

export default shopifyRouter;
