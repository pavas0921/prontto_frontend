import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "../features/client/clientSlice";
import loginReducer from "../features/login/loginSlice";
import rolReducer from "../features/rol/rolSlice";
import storeReducer from "../features/store/storeSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    users: userReducer,
    rol: rolReducer,
    store: storeReducer,
    clients: clientReducer
  },
});
