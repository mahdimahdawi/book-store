import { configureStore } from '@reduxjs/toolkit';
import booksSlice from './books/books';
import catSlice from './categories/categories';

export default configureStore({
  reducer: {
    books: booksSlice,
    categories: catSlice,
  },
});
