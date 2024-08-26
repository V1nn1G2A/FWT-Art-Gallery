import axios from 'axios';
import Cookie from 'js-cookie';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { setToken, clearToken } from '../store/reducers/authSlice';
import type { RootState } from '../store/store';
import { AppDispatch } from '../store/store';

const baseURL = import.meta.env.VITE_APP_BASE_URL;

let store: {
  getState: () => RootState;
  dispatch: AppDispatch;
};

export const injectStore = (_store: {
  getState: () => RootState;
  dispatch: AppDispatch;
}) => {
  store = _store;
};

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const updatedConfig = { ...config };
    const token = store.getState().auth.accessToken;

    if (token) {
      updatedConfig.headers.Authorization = `Bearer ${token}`;
    }
    return updatedConfig;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookie.get('refreshToken');

        const getFingerprint = async () => {
          const fp = await FingerprintJS.load();
          const result = await fp.get();
          return result.visitorId;
        };

        const fingerprint = await getFingerprint();

        const response = await axios.post(`${baseURL}auth/refresh`, {
          refreshToken,
          fingerprint,
        });

        store.dispatch(setToken(response.data.accessToken));
        axiosInstance.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        store.dispatch(clearToken());
        Cookie.remove('refreshToken');
        window.location.href = '/';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
