import { configureStore } from "@reduxjs/toolkit";
import Articles from "./features/data/articles";

export default configureStore({
  reducer: { articles: Articles },
});
