import IImage from './iImage';
import { IPicture } from './IPictures';

export interface IArtist {
  geners: string[];
  _id: string;
  name: string;
  description: string;
  yearsOfLife: string;
  avatar: IImage;
}

export interface IArtists {
  artists: IArtist[];
}

export interface IArtistStatic extends IArtist {
  mainPainting: IPicture;
  id: string;
}
