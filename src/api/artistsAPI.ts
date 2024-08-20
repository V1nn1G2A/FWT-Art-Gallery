import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './axiosBaseQuery';

export const artistsAPI = createApi({
  reducerPath: 'artistsAPI',
  baseQuery,
  endpoints: (build) => ({
    getArtists: build.query({
      query: () => ({
        url: 'artists/static',
        method: 'GET',
        params: {},
      }),
    }),
  }),
});

export const { useGetArtistsQuery } = artistsAPI;
export default artistsAPI;
