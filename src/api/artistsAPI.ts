import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './axiosBaseQuery';
import {
  IArtistInfo,
  IArtistWithPaintings,
  IArtistMainPage,
} from '../models/IArtists';
import { IPicture } from '../models/IPictures';

export const artistsAPI = createApi({
  reducerPath: 'artistsAPI',
  baseQuery,
  endpoints: (build) => ({
    getArtists: build.query<IArtistMainPage[], void>({
      query: () => ({
        url: `artists`,
        method: 'GET',
      }),
    }),
    getArtistById: build.query<
      { artistInfo: IArtistInfo; paintings: IPicture[] },
      { id?: string }
    >({
      query: ({ id = '' }) => ({
        url: `artists/${id}`,
        method: 'GET',
      }),
      transformResponse: (
        response: IArtistWithPaintings
      ): { artistInfo: IArtistInfo; paintings: IPicture[] } => {
        return {
          artistInfo: {
            _id: response._id,
            name: response.name,
            description: response.description,
            yearsOfLife: response.yearsOfLife,
            mainPainting: response.mainPainting,
            genres: response.genres,
            avatar: response.avatar,
          } as IArtistInfo,
          paintings: response.paintings,
        };
      },
    }),
  }),
});

export const { useGetArtistsQuery, useGetArtistByIdQuery } = artistsAPI;
export default artistsAPI;
