import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import { todoPersist } from 'src/utils/persist-config';
import editSlice from './slices/edit-slice';
import filtersSlice from './slices/filters-slice';
import todoSlice from './slices/todo-slice';

const rootReducer = combineReducers({
  todoList: persistReducer(todoPersist, todoSlice),
  filters: filtersSlice,
  editTodo: editSlice,
});

export default rootReducer;
