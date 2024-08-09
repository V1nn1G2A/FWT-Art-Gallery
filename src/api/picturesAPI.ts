import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './axiosBaseQuery';

export const picturesAPI = createApi({
  reducerPath: 'picturesAPI',
  baseQuery: baseQuery(),
  endpoints: (build) => ({
    getPictures: build.query({
      query: () => ({
        url: 'pictures',
      }),
    }),
  }),
});

export const { useGetPicturesQuery } = picturesAPI;
