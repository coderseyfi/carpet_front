import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api";

export const fetchHeroData = createAsyncThunk("hero/fetch", async () => {
  const response = await axiosInstance.get("/api/PlatformInfo/GetAll"); 
  return response.data;
});

const heroSlice = createSlice({
  name: "hero",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchHeroData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchHeroData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default heroSlice.reducer;
