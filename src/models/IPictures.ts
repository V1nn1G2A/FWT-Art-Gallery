import IImage from './IImage';

export interface IPicture {
  _id: string;
  name: string;
  yearOfCreation: string;
  image: IImage;
  image: IImage;
}

export interface IPictures {
  pictures: IPicture[];
}
