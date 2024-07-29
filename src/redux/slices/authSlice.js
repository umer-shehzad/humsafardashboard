import { createSlice } from "@reduxjs/toolkit";
import { userSignupThunk } from "../thunks/authThunk";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    state: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    loading: false
  },
  // reducers: {
  //   setUser: (state, action) => {
  //     state.user = action.payload;
  //   }
  // }
  extraReducers: (builder) => {
    builder
      .addCase(userSignupThunk.pending, (state) => {
        state.loading = true;
        state.state = 'loading';
      })
      .addCase(userSignupThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.login = action.payload;
        state.state = 'succeeded';
      })
      .addCase(userSignupThunk.rejected, (state) => {
        state.loading = false;
        state.state = 'failed';
    })
  }
});

// export const { setUser } = authSlice.actions;
export const authReducer = authSlice.reducer;