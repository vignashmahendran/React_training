import { createSlice, nanoid } from "@reduxjs/toolkit";

// const initialinput=
export const inputSlice = createSlice({
  name: "input",
  initialState: {
    input: "sample",
  },
  reducers: {
    setInput: (state, action) => {
      state.input = action.payload;
    },
  },
});
export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = { id: nanoid(), text: action.payload };
      state.todos.push(todo);
      return ;

    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id != action.payload.id) {
          return todo;
        } else {
          return {
            id: todo.id,
            text: action.payload.text,
          };
        }
      });
    },
  },
});
export const { setInput } = inputSlice.actions;

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
