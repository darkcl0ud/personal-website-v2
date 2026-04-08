import { configureStore } from "@reduxjs/toolkit";
import locateReducer from "./locate";
import articlesReducer from "./articles";

const store = configureStore({
  reducer: { locate: locateReducer, articles: articlesReducer },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;