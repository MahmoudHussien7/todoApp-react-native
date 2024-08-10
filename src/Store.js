// src/store.js
import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { fetchTodosFromAPI } from "../services/TodoService";
export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetchTodosFromAPI();
  return response.data;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    status: "idle",
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    updateTodo: (state, action) => {
      const index = state.items.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.items[index] = action.payload;
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const index = state.items.findIndex(
        (todo) => todo.id === action.payload.id
      );
      state.items[index].status = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { addTodo, updateTodo, deleteTodo, toggleTodoStatus } =
  todosSlice.actions;

export const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});
