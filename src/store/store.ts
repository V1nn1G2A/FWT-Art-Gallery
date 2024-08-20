import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authSlice from './reducers/authSlice';
import artistsAPI from '../api/artistsAPI';

const rootReducer = combineReducers({
  [artistsAPI.reducerPath]: artistsAPI.reducer,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(artistsAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
