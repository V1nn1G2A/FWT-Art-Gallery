import IImage from './IImage';
import { IPicture } from './IPictures';

export interface IArtist {
  _id: string;
  name: string;
  description: string;
  yearsOfLife: string;
  mainPainting: IPicture;
  __v: number;
}

export interface IArtistInfo extends IArtist {
  genres: {
    _id: string;
    name: string;
  }[];
  avatar: IImage;
}

export interface IArtistWithPaintings extends IArtistInfo {
  paintings: IPicture[];
}

export interface IArtistMainPage extends IArtist {
  genres: string[];
}
