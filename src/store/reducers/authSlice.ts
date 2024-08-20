import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  refreshToken: string;
  accessToken: string;
}

const initialState: AuthState = {
  refreshToken: '',
  accessToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (
      state,
      action: PayloadAction<{ accessToken: string; refreshToken: string }>
    ) => {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    },
    clearToken: (state) => {
      return {
        ...state,
        accessToken: '',
        refreshToken: '',
      };
    },
  },
});

export default authSlice.reducer;

export const { setToken, clearToken } = authSlice.actions;
