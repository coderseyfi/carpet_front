import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../api";
export const fetchPlaceDetailById = createAsyncThunk("placeDetail/fetchById",async (id) => {
    const reqBody ={
        id:id,
    }
    const response = await axiosInstance.post("/api/Venue/GetById",reqBody);
    return response.data;
  }
);

const placeDetailSlice = createSlice({
  name: "placeDetail",
  initialState: {
    data: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaceDetailById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlaceDetailById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchPlaceDetailById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default placeDetailSlice.reducer;
