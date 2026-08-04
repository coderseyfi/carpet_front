import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api";
export const fetchAvailability = createAsyncThunk("availability/fetch",async () => {
    const response = await axiosInstance.get("/api/Availability/GetAll");
    return response.data;
  }
);

const availabilitySlice = createSlice({
  name: "availability",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvailability.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAvailability.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAvailability.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default availabilitySlice.reducer;
