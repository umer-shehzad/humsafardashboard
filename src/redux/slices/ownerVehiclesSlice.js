import { createSlice } from "@reduxjs/toolkit";
import { fetchOwnerVehiclesThunk } from "../thunks/fetchOwnerVehiclesThunk";
import { addOwnerVehiclesThunk } from "../thunks/addOwnerVehiclesThunk";
import { editOwnerVehiclesThunk } from "../thunks/editOwnerVehiclesThunk";

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
      .addCase(addOwnerVehiclesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addOwnerVehiclesThunk.fulfilled, (state, action) => {
        state.ownerVehiclesData.push(action.payload);
        state.loading = false;
      })
      .addCase(addOwnerVehiclesThunk.rejected, (state) => {
        state.loading = false;
      })
      .addCase(editOwnerVehiclesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(editOwnerVehiclesThunk.fulfilled, (state, action) => {
        const updatedVehicle = action.payload;
        const index = state.ownerVehiclesData.findIndex(vehicle => vehicle.id === updatedVehicle.id);
        if (index !== -1){
          state.ownerVehiclesData[index] = updatedVehicle;
        } else {
          console.log('Vehicle not found');
        }
        // state.ownerVehiclesData.push(action.payload);
        state.loading = false;
      })
      .addCase(editOwnerVehiclesThunk.rejected, (state) => {
        state.loading = false;
      })
  }
});

export const OwnerVehiclesReducer = ownerVehiclesSlice.reducer;