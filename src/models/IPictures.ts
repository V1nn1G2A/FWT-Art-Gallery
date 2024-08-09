export interface IPicture {
  _id: string;
  name: string;
  yearOfCreation: string;
  image: {
    _id: string;
    src: string;
    webp: string;
    src2x: string;
    webp2x: string;
    original: string;
  };
}

export interface IPictures {
  pictures: IPicture[];
}
