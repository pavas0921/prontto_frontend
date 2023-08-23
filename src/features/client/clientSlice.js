
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createClientAPI, getAllClientsApi } from "../../services/client";

const initialState = {
    clients: [],
    loading: false,
  };

  export const createClient = createAsyncThunk(
    "clients/createClient",
    async (clientData) => {
      const data = await createClientAPI(clientData);
      return data;
    }
  );

  export const getAllClient = createAsyncThunk(
    "clients/getAllClients",
    async () => {
      const data = await getAllClientsApi();
      return data;
    }
  );

  export const clientSlice = createSlice({
    name: "clients",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
      .addCase(getAllClient.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllClient.fulfilled, (state, action) => {
          state.loading = false;
          state.clients = action.payload;
      })        
        .addCase(createClient.pending, (state) => {
          state.loading = true;
        })
        .addCase(createClient.fulfilled, (state, action) => {
            state.loading = false;
            state.clients = action.payload;
        });
    },
  });
  
  export const selectClientState = (state) => state.clients;
  export default clientSlice.reducer;
  