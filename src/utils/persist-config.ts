// import storage from 'redux-persist/lib/storage';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

const storage = createWebStorage('local');

export const todoPersist = {
  key: 'todo-list',
  storage,
  keyPrefix: 'redux-',
};
