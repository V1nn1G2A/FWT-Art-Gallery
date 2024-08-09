export interface IArtist {
  geners: string[];
  _id: string;
  name: string;
  description: string;
  yearsOfLife: string;
}

export interface IArtists {
  pictures: IArtist[];
}
