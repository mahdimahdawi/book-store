import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, category: 'technology' },
  { id: 1, category: 'History' },
  { id: 2, category: 'Bio Technology' },
  { id: 3, category: 'science' },
  { id: 4, category: 'story' },
  { id: 5, category: 'roman' },
  { id: 6, category: 'navol' },
  { id: 7, category: 'psyclogy' },
  { id: 8, category: 'humans behoivr' },
  { id: 9, category: 'literature' },
  { id: 10, category: 'civil engineering' },
];

const catSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    CATEGORY: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});

export const selectBookCategries = (state) => state.categories;

export const { CATEGORY } = catSlice.actions;

export default catSlice.reducer;
