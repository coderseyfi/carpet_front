import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api";

export const fetchSessionData = createAsyncThunk("session/fetch", async () => {
  const response = await axiosInstance.get("/api/SiteUser/GetInfo"); 
  return response.data;
});

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSessionData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSessionData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSessionData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default sessionSlice.reducer;
