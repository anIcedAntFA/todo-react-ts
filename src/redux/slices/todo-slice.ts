import { createSlice } from '@reduxjs/toolkit';
import { ITodoItem } from 'src/types/types';

const initialState: ITodoState = {
  todoList: [
    { id: 1, name: 'Study React', category: 'Coding', priority: 'High', completed: false },
    { id: 2, name: 'Study MaterialUI', category: 'Coding', priority: 'Medium', completed: false },
    { id: 3, name: 'Study Rust', category: 'Coding', priority: 'Low', completed: false },
    { id: 4, name: 'Study Java', category: 'Coding', priority: 'Low', completed: false },
  ],
};

interface ITodoState {
  todoList: ITodoItem[];
}

const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todoList.push(action.payload);
    },
    editTodo(state, action) {
      state.todoList = state.todoList.map((todo) => {
        return todo.id === action.payload.id ? action.payload : todo;
      });
      // return state.todoList.map((todo) => {
      //   return todo.id === action.payload.id ? (action.payload as ITodoItem) : todo;
      // });
    },
    deleteTodo(state, action) {
      return {
        ...state,
        todoList: state.todoList.filter((todo) => !action.payload.includes(todo.id)),
      };
    },
    toggleCompletedStatus(state, action) {
      state.todoList = state.todoList.map((todo) => {
        return todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo;
      });
    },
  },
});

export const todoListActions = todoSlice.actions;

export default todoSlice.reducer;
