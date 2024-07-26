import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIs } from "../store/axiosConfig";

export const imageUploadThunk = createAsyncThunk(
  "image/upload",
  async ({ file }, thunkAPI) => {
    const formData = new FormData();
    formData.append('image', file);
    // console.log("inside image upload thunk", formData);
    try {
      const response = await APIs.post('image/upload/single', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // console.log('image upload response', response);
      return response.data;
    } catch (error) {
      if (!error.response) {
        throw error;
      }
      return thunkAPI.rejectWithValue({
        statusCode: error.response.status,
        message: error.response.data.error,
      })
    }
  }
)
