import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIs } from "../store/axiosConfig";

const token = JSON.parse(localStorage.getItem('login-data'))?.access_token;

export const addOwnerVehiclesThunk = createAsyncThunk(
  "addOwnerDrivers",
  async (payload, thunkAPI) => {
    try {
      const response = await APIs.post('vehicle/create', payload, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }
      );
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
