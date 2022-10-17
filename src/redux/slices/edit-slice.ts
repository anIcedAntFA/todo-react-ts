import { createSlice } from '@reduxjs/toolkit';
import { Nullable } from 'src/types';
import { ITodoItem } from 'src/types/types';

interface InitialType {
  isEdit: boolean;
  currentTodo: Nullable<ITodoItem>;
}

const initialState: InitialType = { isEdit: false, currentTodo: null };

const editSlice = createSlice({
  name: 'edit',
  initialState,
  reducers: {
    initEditTodo(_, action) {
      return { isEdit: true, currentTodo: action.payload };
    },
    resetEditTodo() {
      return initialState;
    },
  },
});

export const { initEditTodo, resetEditTodo } = editSlice.actions;

export default editSlice.reducer;
