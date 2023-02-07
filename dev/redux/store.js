import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./../redux/appSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
