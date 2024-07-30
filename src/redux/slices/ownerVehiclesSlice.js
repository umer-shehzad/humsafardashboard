import { createSlice } from "@reduxjs/toolkit";
import { fetchOwnerVehiclesThunk } from "../thunks/fetchOwnerVehiclesThunk";

const ownerVehiclesSlice = createSlice({
  name: 'ownerVehicles',
  initialState: {
    ownerVehiclesData: null,
    state: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOwnerVehiclesThunk.pending, (state) => {
        state.loading = true;
        state.state = 'loading';
      })
      .addCase(fetchOwnerVehiclesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.ownerVehiclesData = action.payload;
        state.state = 'succeeded';
      })
      .addCase(fetchOwnerVehiclesThunk.rejected, (state) => {
        state.loading = false;
        state.state = 'failed';
      })
    //   .addCase(addOwnerDriversThunk.pending, (state) => {
    //     state.loading = true;
    //   })
    //   .addCase(addOwnerDriversThunk.fulfilled, (state, action) => {
    //     state.ownerDriversData.push(action.payload);
    //     state.loading = false;
    //   })
    //   .addCase(addOwnerDriversThunk.rejected, (state) => {
    //     state.loading = false;
    //   })
  }
});

export const OwnerVehiclesReducer = ownerVehiclesSlice.reducer;