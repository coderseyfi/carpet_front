import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api";
export const fetchVenueTypes = createAsyncThunk("types/fetch", async () => {
  const response = await axiosInstance.get("/api/Venue/GetAllVenueTypes");
  return response.data;
});

const venueTypesSlice = createSlice({
  name: "types",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVenueTypes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchVenueTypes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchVenueTypes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default venueTypesSlice.reducer;
