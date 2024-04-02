import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
const baseUrl = import.meta.env.VITE_BASE_URL;

export const facebookApi = createApi({
  reducerPath: 'facebookApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => {
    return {
      facebookLogin: builder.mutation({
        query: ({ body }: { body: FacebookForm }) => {
          return {
            url: '/api/facebook/login',
            method: 'POST',
            body,
          };
        },
      }),
      fetchFacebookPosts: builder.query({
        query: ({ token }: { token: string }) => {
          let appToken = token;
          if (!appToken) {
            appToken = JSON.parse(
              localStorage.getItem('facebookToken') as string
            );
            if (!appToken) {
              throw new Error('No token provided');
            }
          }
          return {
            url: '/api/facebook/posts',
            method: 'GET',
            headers: [
              ['Content-Type', 'application/json'],
              ['Authorization', `Bearer ${appToken}`],
            ],
          };
        },
      }),
      fetchFacebookComments: builder.query({
        query: ({ token, postId }: { token: string; postId: string }) => {
          let appToken = token;
          if (!appToken) {
            appToken = JSON.parse(
              localStorage.getItem('facebookToken') as string
            );
            if (!appToken) {
              throw new Error('No token provided');
            }
          }
          return {
            url: `/api/facebook/comments/${postId}`,
            method: 'GET',
            headers: [
              ['Content-Type', 'application/json'],
              ['Authorization', `Bearer ${appToken}`],
            ],
          };
        },
      }),

      postFacebookAds: builder.mutation({
        query: ({ body }: { body: FacebookAdsForm }) => {
          const appToken = localStorage.getItem('facebookToken') as string;
          if (!appToken) {
            throw new Error('No token provided');
          }
          return {
            url: '/api/facebook/campaign',
            method: 'POST',
            body,
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
  useFacebookLoginMutation,
  useFetchFacebookPostsQuery,
  useFetchFacebookCommentsQuery,
  usePostFacebookAdsMutation,
} = facebookApi;

export default facebookApi;
