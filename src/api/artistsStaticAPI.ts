import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from './axiosBaseQuery';
import type {
  IArtistInfo,
  IArtistWithPaintings,
  IArtistMainPage,
} from '../models/IArtists';
import type { CardProps } from '../ui-components/Card/Card';
import { IPicture } from '../models/IPictures';

export const artistsStaticAPI = createApi({
  reducerPath: 'artistsStaticAPI',
  baseQuery,
  endpoints: (build) => ({
    getArtists: build.query<{ cards: CardProps[] }, void>({
      query: () => ({
        url: `artists/static`,
        method: 'GET',
        params: {},
      }),

      transformResponse: (
        response: IArtistMainPage[]
      ): { cards: CardProps[] } => {
        const cards = response.map((artist: IArtistMainPage) => ({
          _id: artist.mainPainting._id,
          name: artist.mainPainting.name,
          yearOfCreation: artist.mainPainting.yearOfCreation,
          image: artist.mainPainting.image,
          artistId: artist._id,
        }));

        return { cards };
      },
    }),
    getArtistById: build.query<
      { artistInfo: IArtistInfo; paintings: IPicture[] },
      { id?: string }
    >({
      query: ({ id = '' }) => ({
        url: `artists/static/${id}`,
        method: 'GET',
        params: {},
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

export const { useGetArtistsQuery, useGetArtistByIdQuery } = artistsStaticAPI;
export default artistsStaticAPI;
