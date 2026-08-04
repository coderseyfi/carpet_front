import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api";

export const fetchPlacesData = createAsyncThunk("places/fetch", async () => {
  const reqBody = {
  };
  const response = await axiosInstance.post("/api/Venue/GetAll", reqBody);
  return response.data.items;
});

const placesSlice = createSlice({
  name: "places",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlacesData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlacesData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPlacesData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default placesSlice.reducer;
