import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserAPI, getAllUsersApi, getUserByIdApi, updateUserAPI } from "../../services/user";

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

export const getUserById = createAsyncThunk(
  "users/getUserById",
  async (id) => {
    const data = await getUserByIdApi(id);
    return data;
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (token) => {
    const data = await createUserAPI(token);
    return data;
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (body) => {
    const data = await updateUserAPI(body);
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
      })
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        (state.loading = false), (state.users = action.payload);
      })
      .addCase(getUserById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        (state.loading = false), (state.users = action.payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        (state.loading = false), (state.users = action.payload);
      });
  },
});

export const selectUserState = (state) => state.users;
export default userSlice.reducer;
