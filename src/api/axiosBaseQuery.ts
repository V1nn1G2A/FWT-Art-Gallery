import axios from 'axios';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig, AxiosError } from 'axios';
import { Mutex } from 'async-mutex';
import { setToken, clearToken } from '../store/reducers/authSlice';
import type { RootState } from '../store/store';

const mutex = new Mutex();

const baseUrl = 'https://internship-front.framework.team/';

const baseQuery: BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
  },
  unknown,
  unknown
> = async ({ url, method, data, params }, api) => {
  await mutex.waitForUnlock();
  const state = api.getState() as RootState;
  const token = state.auth.accessToken;

  const headers: Record<string, string> = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  try {
    const result = await axios({
      url: `${baseUrl}${url}`,
      method,
      data,
      params,
      headers,
    });

    return { data: result.data };
  } catch (axiosError) {
    const error = axiosError as AxiosError;
    if (error.response?.status === 401) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();
        try {
          const { refreshToken } = state.auth;
          const refreshResult = await axios.post(`${baseUrl}auth/refresh`, {
            token: refreshToken,
          });

          api.dispatch(setToken(refreshResult.data));

          const retryResult = await axios({
            url: `${baseUrl}${url}`,
            method,
            data,
            params,
            headers: {
              ...headers,
              Authorization: `Bearer ${refreshResult.data.accessToken}`,
            },
          });

          return { data: retryResult.data };
        } catch (refreshError) {
          api.dispatch(clearToken());

          return { error: { status: 401, data: 'Refresh token expired' } };
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        return baseQuery({ url, method, data, params }, api, {});
      }
    }

    return {
      error: {
        status: error.response?.status,
        data: error.response?.data || error.message,
      },
    };
  }
};

export default baseQuery;
