import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "../thunks/loginThunk";

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    login: null,
    state: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
    loading: false,
  },
//   reducers: {
//     setLogin: (state, action) => {
//       state.login = action.payload;
//     }
//   },
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.state = 'loading';
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.login = action.payload;
        state.state = 'succeeded';
      })
      .addCase(loginThunk.rejected, (state) => {
        state.loading = false;
        state.state = 'failed';
    })
  }
});

// export const { setLogin } = loginSlice.actions;
export const loginReducer = loginSlice.reducer;