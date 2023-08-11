import { configureStore, createReducer, createAction } from "@reduxjs/toolkit";

import dataJSON from "./assets/data.json";

const initialState = {
  articles: dataJSON,
};

export const deleteItem = createAction("articles/deleteItem");

const articlesReducer = createReducer(initialState, (builder) => {
  builder.addCase(deleteItem, (state, action) => {
    state.articles.filter((article) => article.id !== action.payload);
  });
});

export const store = configureStore({
  name: "store",
  initialState,
  reducer: { articles: articlesReducer },
});
