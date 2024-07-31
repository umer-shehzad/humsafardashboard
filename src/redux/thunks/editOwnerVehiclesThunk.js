import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIs } from "../store/axiosConfig";

const token = JSON.parse(localStorage.getItem('login-data'))?.access_token;
const singleVehicleID = localStorage.getItem('singleVehicleID');

export const editOwnerVehiclesThunk = createAsyncThunk(
  "editOwnerVehicles",
  async (payload, thunkAPI) => {
    try {
      const response = await APIs.patch(`vehicle/${singleVehicleID}`, payload, {
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
