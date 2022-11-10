import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from 'features/api/apiSlice';
import authSlice from 'features/auth/authSlice';
import postsSlice from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware().concat(apiSlice.middleware)
  ),
});
