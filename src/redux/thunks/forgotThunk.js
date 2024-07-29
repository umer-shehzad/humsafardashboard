import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIs } from "../store/axiosConfig";

export const forgotThunk = createAsyncThunk(
  "forgotPassword",
  async (payload, thunkAPI) => {
    try {
      const response = await APIs.post('auth/forgotPassword', payload);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue({
        message: error.response.data.message,
        statusCode: error.response.data.status,
      })
    }
  }
)
