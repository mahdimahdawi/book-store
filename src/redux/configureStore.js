import { configureStore } from '@reduxjs/toolkit';
import reducer from './books/books';
import catREducer from './categories/categories';

export default configureStore({
  reducer: {
    books: reducer,
    categories: catREducer,
  },
});
