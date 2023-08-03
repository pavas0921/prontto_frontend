import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsersApi } from "../../services/user";

const initialState = {
  users: [],
  loading: false,
};

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (token) => {
    const data = await getAllUsersApi(token);
    return data;
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        (state.loading = false), (state.users = action.payload);
      });
      
  },
});

export const selectUserState = (state) => state.users;
export default userSlice.reducer;