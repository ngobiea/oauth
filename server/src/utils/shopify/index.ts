// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Shopify from 'shopify-node-api';
import { v4 as uuidv4 } from 'uuid';

const {
  SHOPIFY_CLIENT_ID,
  SHOPIFY_CLIENT_SECRET,
  SHOPIFY_SHOP_NAME,
  SHOPIFY_SCOPES,
  SHOPIFY_REDIRECT_URI,
} = process.env as Record<string, string>;

export const shopify = new Shopify({
  shop: SHOPIFY_SHOP_NAME,
  shopify_api_key: SHOPIFY_CLIENT_ID,
  shopify_shared_secret: SHOPIFY_CLIENT_SECRET,
  shopify_scope: SHOPIFY_SCOPES,
  redirect_uri: SHOPIFY_REDIRECT_URI,
  // you must provide a randomly selected value unique for each authorization request
  nonce: uuidv4(),
});
