import { createSlice } from '@reduxjs/toolkit';

export const pictureSlice = createSlice({
  name: 'pictures',
  initialState: {
    pictures: [],
  },
  reducers: {
    setPictures: (state, action) => {
      return {
        ...state,
        pictures: action.payload,
      };
    },
  },
});

export const { setPictures } = pictureSlice.actions;
export default pictureSlice.reducer;
