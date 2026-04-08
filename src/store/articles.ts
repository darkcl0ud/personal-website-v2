import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type ArticleListData } from "../http/articles";

const initialState = {
  home_articles: [] as ArticleListData[],
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setHomeArticles: (state, action: PayloadAction<{ home_articles: ArticleListData[] }>) => {
      state.home_articles = action.payload.home_articles;
    },
  },
});

export default articlesSlice.reducer;
export const articlesActions = articlesSlice.actions;