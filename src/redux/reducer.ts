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

console.log(initialState, `😡`);

const dataSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodos(state, action) {
      return {
        ...state,
        todo: [...state.todo, action.payload],
      };
    },
    // removeTodo(state, action: PayloadAction<string>) {
    //   const index = state.findIndex((todo) => todo.id === action.payload);
    //   return state.splice(index, 1);
    // },
    // setTodoStatus(
    //   state,
    //   action: PayloadAction<{ completed: boolean; id: string }>
    // ) {
    //   const index = state.findIndex((todo) => todo.id === action.payload.id);
    //   state[index].completed = action.payload.completed;
    //   return state;
    // },
    // editTodo(state, action: PayloadAction<{ title: string; id: string }>) {
    //   const index = state.findIndex((todo) => todo.id === action.payload.id);
    //   state[index].title = action.payload.title;
    //   return state;
    // },
    // default: (state) => {
    //   return state;
    // },
  },
});

export const { addTodos } = dataSlice.actions;
export const reducer = dataSlice.reducer;
