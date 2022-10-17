import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from './store';

export const todoListSelector = (state: RootState) => state.todoList.todoList;
export const filtersSelector = (state: RootState) => state.filters;
export const filterStatusSelector = (state: RootState) => state.filters.status;
export const filterSortingSelector = (state: RootState) => state.filters.sorting;
export const filterCategoriesSelector = (state: RootState) => state.filters.categories;
export const filterPrioritiesSelector = (state: RootState) => state.filters.priorities;
export const searchTextSelector = (state: RootState) => state.filters.search;
export const editTodoSelector = (state: RootState) => state.editTodo;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterCategoriesSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, categories, priorities) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        return (
          todo.name.includes(searchText) &&
          (categories.length ? categories.find(({ title }) => title === todo.category) : true) &&
          (priorities.length ? priorities.find(({ title }) => title === todo.priority) : true)
        );
      }

      return (
        todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (categories.length ? categories.find(({ title }) => title === todo.category) : true) &&
        (priorities.length ? priorities.find(({ title }) => title === todo.priority) : true)
      );
    });
  },
);
