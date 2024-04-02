import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import shopifyApi from './apis/shopifyApi';
import facebookApi from './apis/facebookApi';
import instagramApi from './apis/instagramApi';
import pinterestApi from './apis/pinterestApi';
import googleApi from './apis/googleApi';
import { facebookReducer } from './slice/facebook';
export const store = configureStore({
  reducer: {
    facebook: facebookReducer,
    [shopifyApi.reducerPath]: shopifyApi.reducer,
    [facebookApi.reducerPath]: facebookApi.reducer,
    [instagramApi.reducerPath]: instagramApi.reducer,
    [pinterestApi.reducerPath]: pinterestApi.reducer,
    [googleApi.reducerPath]: googleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(shopifyApi.middleware)
      .concat(facebookApi.middleware)
      .concat(instagramApi.middleware)
      .concat(pinterestApi.middleware)
      .concat(googleApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
