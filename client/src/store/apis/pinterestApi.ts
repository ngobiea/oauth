import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
const baseUrl = import.meta.env.VITE_BASE_URL;
//interest
export const pinterestApi = createApi({
  reducerPath: 'pinterestApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    pinterestLogin: builder.mutation({
      query: () => {
        return {
          url: '/authPinterest',
          method: 'GET',
        };
      },
    }),
    fetchPinterestPosts: builder.query({
      query: ({ token }: { token: string }) => {
        let appToken = token;
        if (!appToken) {
          appToken = JSON.parse(
            localStorage.getItem('pinterestToken') as string
          );
          if (!appToken) {
            throw new Error('No token provided');
          }
        }
        return {
          url: '/api/pinterest/posts',
          method: 'GET',
          headers: [
            ['Content-Type', 'application/json'],
            ['Authorization', `Bearer ${appToken}`],
          ],
        };
      },
    }),
    fetchPinterestComments: builder.query({
      query: ({ token, postId }: { token: string; postId: string }) => {
        let appToken = token;
        if (!appToken) {
          appToken = JSON.parse(
            localStorage.getItem('pinterestToken') as string
          );
          if (!appToken) {
            throw new Error('No token provided');
          }
        }
        return {
          url: `/api/pinterest/comments/${postId}`,
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
  usePinterestLoginMutation,
  useFetchPinterestPostsQuery,
  useFetchPinterestCommentsQuery,
} = pinterestApi;

export default pinterestApi;