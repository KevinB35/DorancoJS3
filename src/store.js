import { configureStore } from "@reduxjs/toolkit";
import Articles from "./redux/articles";

export default configureStore({
  reducer: { articles: Articles },
});
