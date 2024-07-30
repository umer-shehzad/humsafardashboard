import { createSlice } from "@reduxjs/toolkit";
import { fetchOwnerDriversThunk } from "../thunks/fetchOwnerDriversThunk";

const fetchOwnerDriversSlice = createSlice({
  name: 'fetchOwnerDrivers',
  initialState: {
    ownerDriversData: null,
    state: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOwnerDriversThunk.pending, (state) => {
        state.loading = true;
        state.state = 'loading';
      })
      .addCase(fetchOwnerDriversThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.ownerDriversData = action.payload;
        state.state = 'succeeded';
      })
      .addCase(fetchOwnerDriversThunk.rejected, (state) => {
        state.loading = false;
        state.state = 'failed';
      })
  }
});

export const fetchOwnerDriversReducer = fetchOwnerDriversSlice.reducer;