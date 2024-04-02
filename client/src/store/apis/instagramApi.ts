import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
const baseUrl = import.meta.env.VITE_BASE_URL;

export const instagramApi = createApi({
  reducerPath: 'instagramApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    instagramLogin: builder.mutation({
      query: ({ body }: { body: InstagramForm }) => {
        return {
          url: '/api/instagram/login',
          method: 'POST',
          body,
        };
      },
    }),
    fetchInstagramPosts: builder.query({
      query: ({ token }: { token: string }) => {
        let appToken = token;
        if (!appToken) {
          appToken = JSON.parse(
            localStorage.getItem('instagramToken') as string
          );
          if (!appToken) {
            throw new Error('No token provided');
          }
        }
        return {
          url: '/api/instagram/posts',
          method: 'GET',
          headers: [
            ['Content-Type', 'application/json'],
            ['Authorization', `Bearer ${appToken}`],
          ],
        };
      },
    }),
    fetchInstagramComments: builder.query({
      query: ({ token, postId }: { token: string; postId: string }) => {
        let appToken = token;
        if (!appToken) {
          appToken = JSON.parse(
            localStorage.getItem('instagramToken') as string
          );
          if (!appToken) {
            throw new Error('No token provided');
          }
        }
        return {
          url: `/api/instagram/comments/${postId}`,
          method: 'GET',
          headers: [
            ['Content-Type', 'application/json'],
            ['Authorization', `Bearer ${appToken}`],
          ],
        };
      },
    }),
  }),
});

export const {
  useInstagramLoginMutation,
  useFetchInstagramPostsQuery,
  useFetchInstagramCommentsQuery,
} = instagramApi;
export default instagramApi;
