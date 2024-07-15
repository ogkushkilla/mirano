import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: {
    minPrice: '',
    maxPrice: '',
    category: '',
  },
  type: 'bouquets',
  title: 'Цветы',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilters: (state, action) => {
      state.filters = action.payload;
    },
    changeType: (state, action) => {
      state.type = action.payload;
    },
    changeTitle: (state, action) => {
      state.title = action.payload;
    },
    changeCategory: (state, action) => {
      state.filters.category = action.payload;
    },
  },
});

export const { changeFilters, changeType, changeTitle, changeCategory } = filterSlice.actions;

export default filterSlice.reducer;