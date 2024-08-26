import { createApi } from '@reduxjs/toolkit/query/react';
import Cookie from 'js-cookie';
import baseQuery from './axiosBaseQuery';
import { setToken } from '../store/reducers/authSlice';

export const authAPI = createApi({
  reducerPath: 'authAPI',
  baseQuery,
  endpoints: (build) => ({
    login: build.mutation<
      { accessToken: string; refreshToken: string },
      { username: string; password: string }
    >({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        data: { ...credentials },
      }),
      async onQueryStarted(credentials, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(setToken(data.accessToken));
          Cookie.set('refreshToken', data.refreshToken);
        } catch (error) {
          console.log(error); // Что здесь делать в случае ошибки
        }
      },
    }),
    register: build.mutation<
      { accessToken: string; refreshToken: string },
      { username: string; password: string }
    >({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        data: { ...credentials },
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authAPI;
export default authAPI;
