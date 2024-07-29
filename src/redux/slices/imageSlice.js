import { createSlice } from "@reduxjs/toolkit";
import { imageUploadThunk } from "../thunks/imageThunk";

const imageSlice = createSlice({
  name: 'image',
  initialState: {
    image: null,
    state: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    isLoading: false
  },
  // reducers: {
  //   setImage: (state, action) => {
  //     state.image = action.payload;
  //   }
  // },
  extraReducers: (builder) => {
    builder
      .addCase(imageUploadThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(imageUploadThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.image = action.payload;
      })
  }
});

export const { setImage } = imageSlice.actions;
export const imageReducer = imageSlice.reducer;