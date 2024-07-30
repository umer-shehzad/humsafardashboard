import { createSlice } from "@reduxjs/toolkit";
import { fetchOwnerDriversThunk } from "../thunks/fetchOwnerDriversThunk";
import { addOwnerDriversThunk } from "../thunks/addOwnerDriversThunk";

const ownerDriversSlice = createSlice({
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
      .addCase(addOwnerDriversThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addOwnerDriversThunk.fulfilled, (state, action) => {
        state.ownerDriversData.push(action.payload);
        state.loading = false;
      })
      .addCase(addOwnerDriversThunk.rejected, (state) => {
        state.loading = false;
      })
  }
});

export const OwnerDriversReducer = ownerDriversSlice.reducer;