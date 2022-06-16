import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface IinitialState {
  todo: Array<Todo>;
}
interface Todo {
  id: string;
  title: string;
  description: string;
  dateAdded: any;
  completed: boolean;
}
const initialState: IinitialState = {
  todo: [],
};

const dataSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodos(
      state,
      action: PayloadAction<{
        id: string;
        title: string;
        description: string;
        dateAdded: any;
        completed: boolean;
      }>
    ) {
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    },
    removeTodo(state, action: PayloadAction<{ id: string }>) {
      return {
        todo: [...state.todo.filter((item) => item.id !== action.payload.id)],
      };
    },
    CompleteTodo(
      state,
      action: PayloadAction<{ id: String; completed: boolean }>
    ) {
      return {
        todo: [
          ...state.todo.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                completed: true,
              };
            }
            return item;
          }),
        ],
      };
    },

    updateTodo(state, action: PayloadAction<{ title: string; id: string }>) {
      return {
        todo: [
          ...state.todo.map((item) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                title: action.payload.title,
              };
            }
            return item;
          }),
        ],
      };
    },
  },
});

export const { addTodos, removeTodo, updateTodo, CompleteTodo } =
  dataSlice.actions;
export const reducer = dataSlice.reducer;
