import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
interface IinitialState {
  id: string;
  title: string;
  description: string;
  dateAdded: Date;
  status: String;
  completed: boolean;
}

const initialState: IinitialState[] = [];

const dataSlice = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    addTodos: {
      reducer: (state, action: PayloadAction<IinitialState>) => {
        state.push(action.payload);
      },
      prepare: (title: string, description: string) => ({
        payload: {
          id: uuidv4(),
          title,
          description,
          dateAdded: new Date(),
          status: "Active",
          completed: false,
        } as IinitialState,
      }),
    },
    removeTodo(state, action: PayloadAction<string>) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    setTodoStatus(
      state,
      action: PayloadAction<{ completed: boolean; id: string }>
    ) {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    default: (state) => {
      return state;
    },
  },
});

export const { addTodos } = dataSlice.actions;
export const reducer = dataSlice.reducer;
