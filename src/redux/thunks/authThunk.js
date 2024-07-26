import { createAsyncThunk } from "@reduxjs/toolkit";
import { APIs } from "../store/axiosConfig";

export const userSignupThunk = createAsyncThunk(
  "users/signup",
  async (payload, thunkAPI) => {
    console.log("inside signup thunk", payload);
    try {
      console.log('before')
      const response = await APIs.post('users/signup', payload);
      console.log('after')
      console.log('signup response', response);
      console.log('signup response data', response.data);
      // if(response.error){
      //   return response.data
      // }
    } catch(error) {
      if(!error.response){
        throw error;
      }
      return thunkAPI.rejectWithValue({
        statusCode: error.response.status,
        message: error.response.data.error,
      })
    }
  }
)