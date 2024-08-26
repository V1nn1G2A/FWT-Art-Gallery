import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authSlice from './reducers/authSlice';
import artistsStaticAPI from '../api/artistsStaticAPI';
import artistsAPI from '../api/artistsAPI';
import authAPI from '../api/authAPI';

const rootReducer = combineReducers({
  [artistsStaticAPI.reducerPath]: artistsStaticAPI.reducer,
  [artistsAPI.reducerPath]: artistsAPI.reducer,
  [authAPI.reducerPath]: authAPI.reducer,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      artistsStaticAPI.middleware,
      artistsAPI.middleware,
      authAPI.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
