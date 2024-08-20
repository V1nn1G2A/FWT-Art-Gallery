import IImage from './iImage';

export interface IPicture {
  _id: string;
  name: string;
  yearOfCreation: string;
  image: IImage;
}

export interface IPictures {
  pictures: IPicture[];
}
