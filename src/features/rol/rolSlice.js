import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllRolApi } from "../../services/rol";

const initialState = {
  rol: [],
  loading: false,
};

export const getAllRol = createAsyncThunk(
  "users/getAllRol",
  async (token) => {
    const data = await getAllRolApi(token);
    return data;
  }
);

export const rolSlice = createSlice({
  name: "rol",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllRol.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllRol.fulfilled, (state, action) => {
        (state.loading = false), (state.rol = action.payload);
      });
      
  },
});

export const selectRolState = (state) => state.rol;
export default rolSlice.reducer;