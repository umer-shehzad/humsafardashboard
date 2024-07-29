import { createSlice } from "@reduxjs/toolkit";
import { forgotThunk } from "../thunks/forgotThunk";

const forgotSlice = createSlice({
  name: 'forgotPassword',
  initialState: {
    login: null,
    state: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(forgotThunk.pending, (state) => {
        state.loading = true;
        state.state = 'loading';
      })
      .addCase(forgotThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.login = action.payload;
        state.state = 'succeeded';
      })
      .addCase(forgotThunk.rejected, (state) => {
        state.loading = false;
        state.state = 'failed';
    })
  }
});

export const forgotPasswordReducer = forgotSlice.reducer;