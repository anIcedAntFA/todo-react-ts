import { createSlice } from '@reduxjs/toolkit';
import { ICategory } from 'src/types/types';

interface InitialFilterType {
  search: string;
  status: string;
  sorting: string;
  categories: ICategory[];
  priorities: ICategory[];
  selected: number[];
}

const initialState: InitialFilterType = {
  search: '',
  status: 'All',
  sorting: 'alphabet-asc',
  categories: [],
  priorities: [],
  selected: [],
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    searchFilterChange(state, action) {
      state.search = action.payload;
    },
    statusFilterChange(state, action) {
      state.status = action.payload;
    },
    sortingFilterChange(state, action) {
      state.sorting = action.payload;
    },
    categoriesFilterChange(state, action) {
      state.categories = action.payload;
    },
    prioritiesFilterChange(state, action) {
      state.priorities = action.payload;
    },
    selectedFilter(state, action) {
      state.selected = action.payload;
    },
  },
});

export const filtersActions = filtersSlice.actions;

export default filtersSlice.reducer;
