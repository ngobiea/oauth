import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
const baseUrl = import.meta.env.VITE_BASE_URL;

export const googleApi = createApi({
  reducerPath: 'googleApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    googleLogin: builder.mutation({
      query: () => {
        return {
          url: '/authGoogle',
          method: 'GET',
        };
      },
    }),
    fetchGooglePosts: builder.query({
      query: ({ token }: { token: string }) => {
        let appToken = token;
        if (!appToken) {
          appToken = JSON.parse(localStorage.getItem('googleToken') as string);
          if (!appToken) {
            throw new Error('No token provided');
          }
        }
        return {
          url: '/api/google/posts',
          method: 'GET',
          headers: [
            ['Content-Type', 'application/json'],
            ['Authorization', `Bearer ${appToken}`],
          ],
        };
      },
    }),
    fetchGoogleComments: builder.query({
      query: ({ token, postId }: { token: string; postId: string }) => {
        let appToken = token;
        if (!appToken) {
          appToken = JSON.parse(localStorage.getItem('googleToken') as string);
          if (!appToken) {
            throw new Error('No token provided');
          }
        }
        return {
          url: `/api/google/comments/${postId}`,
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
  useGoogleLoginMutation,
  useFetchGooglePostsQuery,
  useFetchGoogleCommentsQuery,
} = googleApi;

export default googleApi;
