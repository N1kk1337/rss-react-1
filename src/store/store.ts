// store.ts
import { configureStore } from '@reduxjs/toolkit';
import searchSlice from './slices/searchSlice';
import catsSlice from './slices/catsSlice';

import { api } from './services/flickrApi';

const store = configureStore({
  reducer: {
    search: searchSlice,
    cats: catsSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
