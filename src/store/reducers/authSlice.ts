import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Cookie from 'js-cookie';

export interface AuthState {
  accessToken: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  accessToken: '',
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        accessToken: action.payload,
        isAuth: true,
      };
    },
    clearToken: (state) => {
      Cookie.remove('refreshToken');

      return {
        ...state,
        accessToken: '',
        isAuth: false,
      };
    },
  },
});

export default authSlice.reducer;

export const { setToken, clearToken } = authSlice.actions;
