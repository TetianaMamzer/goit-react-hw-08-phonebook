import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from '../../services/auth-api'

export const signup = createAsyncThunk(
  'auth/signup',
  async(data, {rejectWithValue}) => {
    
    try {
      
      const {data: result} = await api.signup(data);
      console.log(result);
      return result;
    }
    catch({response}) {
      
      return rejectWithValue(response)
    }
  }
)