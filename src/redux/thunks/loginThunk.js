import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIs } from "../store/axiosConfig";

export const loginThunk = createAsyncThunk(
  "login",
  async (payload, thunkAPI) => {
    try {
      const response = await APIs.post('auth/login', payload);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        statusCode: error.response.data.status,
        error: error.response.data.error,
      })
    }
  }
)
