import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../features/login/loginSlice";
import rolReducer from "../features/rol/rolSlice";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    login: loginReducer,
    users: userReducer,
    rol: rolReducer
  },
});
