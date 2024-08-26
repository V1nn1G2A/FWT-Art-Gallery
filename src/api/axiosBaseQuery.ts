import { AxiosRequestConfig, AxiosError } from 'axios';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import axiosInstance from './axiosInstance';

const getFingerprint = async () => {
  const fp = await FingerprintJS.load();
  const result = await fp.get();
  return result.visitorId;
};

const baseQuery: BaseQueryFn<
  {
    url: string;
    method: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
  },
  unknown,
  unknown
> = async ({ url, method, data, params }) => {
  const fingerprint = await getFingerprint();

  try {
    const result = await axiosInstance({
      url,
      method,
      data: {
        ...data,
        fingerprint,
      },
      params,
    });

    return { data: result.data };
  } catch (axiosError) {
    const error = axiosError as AxiosError;
    return {
      error: {
        status: error.response?.status,
        data: error.response?.data || error.message,
      },
    };
  }
};

export default baseQuery;
