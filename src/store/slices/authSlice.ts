import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
}

const initialState: AuthState = {
  accessToken: '',
  refreshToken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state: AuthState, action: PayloadAction<AuthState>) => {
      return {
        ...state,
        accsessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
    },
    clearToken: (state: AuthState) => {
      return {
        ...state,
        accsessToken: null,
        refreshToken: null,
      };
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
