import { createSlice } from "@reduxjs/toolkit";

import dataJSON from "../assets/data.json";

const initialState = {
  articles: dataJSON,
};

export const Articles = createSlice({
  name: "articles",
  initialState,
  reducers: {
    DELETE: (state, action) => {
      state.articles = state.articles.filter(
        (article) => article.id !== action.payload
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { DELETE } = Articles.actions;

export default Articles.reducer;
