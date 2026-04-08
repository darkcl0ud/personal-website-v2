import { configureStore } from "@reduxjs/toolkit";
import locateReducer from "./locate";

const store = configureStore({
  reducer: { locate: locateReducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;