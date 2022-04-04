import { configureStore } from "@reduxjs/toolkit";
import toDoListItemReducer from "./toDoListItemSlice"

export default configureStore({
  reducer: {
      toDoListItems: toDoListItemReducer
  },
});
