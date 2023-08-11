import { createSlice } from "@reduxjs/toolkit";

import dataJSON from "../../assets/data.json";

const initialState = {
  value: dataJSON,
};

export const articles = createSlice({
  name: "articles",
  initialState,
  reducers: {
    decrement: (state, id) => {
      state.value.filter((article) => article.id !== id);
    },
  },
});

// Action creators are generated for each case reducer function
export const { decrement } = articles.actions;

export default articles.reducer;
