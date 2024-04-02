import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
const baseUrl = import.meta.env.VITE_BASE_URL;

export const shopifyApi = createApi({
  reducerPath: 'shopifyApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => {
    return {
      shopifyLogin: builder.mutation({
        query: () => {
          return {
            url: '/authShopify',
            method: 'GET',
          };
        },
      }),
      fetchShopifyProducts: builder.query({
        query: ({ token }: { token: string }) => {
          let appToken = token;
          if (!appToken) {
            appToken = JSON.parse(
              localStorage.getItem('shopifyToken') as string
            );
            if (!appToken) {
              throw new Error('No token provided');
            }
          }
          return {
            url: '/api/shopify/products',
            method: 'GET',
            headers: [
              ['Content-Type', 'application/json'],
              ['Authorization', `Bearer ${appToken}`],
            ],
          };
        },
      }),

      fetchShopifyOrders: builder.query({
        query: () => {
          const appToken = JSON.parse(
            localStorage.getItem('shopifyToken') as string
          );
          console.log(appToken);
          if (!appToken) {
            window.location.href = '/';
          }

          return {
            url: '/api/shopify/orders',
            method: 'GET',
            headers: [
              ['Content-Type', 'application/json'],
              ['Authorization', `Bearer ${appToken}`],
            ],
          };
        },
      }),
    };
  },
});

export const {
  useShopifyLoginMutation,
  useFetchShopifyProductsQuery,
  useFetchShopifyOrdersQuery,
} = shopifyApi;
export default shopifyApi;
