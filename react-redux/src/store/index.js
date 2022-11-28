import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth";
import counterReducer from "./counter";

const store = configureStore({
  // reducer: counterSlice.reducer,
  // we can use an object if we want to provide multiple state slices
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
