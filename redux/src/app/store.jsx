import { configureStore } from "@reduxjs/toolkit";
import { todoSlice, inputSlice } from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
    input: inputSlice.reducer,
  },
});
