import { createSlice } from "@reduxjs/toolkit";

export const toDoListItemSlice = createSlice({
  name: "toDoListItem",
  initialState: {
    items: [],
    priority:3
  },
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    updateItem: (state, action) => {
      let item = state.items.find((item) => item.id === action.payload.id);
      item.done = !item.done;
    },
    deleteItem: (state, action) => {
      let item = state.items.find((item) => item.id === action.payload.id);
      state.items.splice(state.items.indexOf(item), 1);
    },
  },
});

export const { setItems, addItem, updateItem, deleteItem ,updatePriority} =
  toDoListItemSlice.actions;

export default toDoListItemSlice.reducer;
