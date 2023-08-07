import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllStoreApi } from "../../services/store";

const initialState = {
  store: [],
  loading: false,
};

export const getAllStore = createAsyncThunk(
  "store/getAllStore",
  async (token) => {
    const data = await getAllStoreApi(token);
    return data;
  }
);

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllStore.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllStore.fulfilled, (state, action) => {
        (state.loading = false), (state.store = action.payload);
      });
      
  },
});

export const selectStoreState = (state) => state.store;
export default storeSlice.reducer;