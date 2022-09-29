// books.js
import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vRm8rPqJmNiNHQimOjpL/books';

const headers = {
  'Content-Type': 'application/json',
};

export const loadBooks = createAsyncThunk('books/loadBooks', async () => {
  const books = await axios.get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw new Error(error);
    });
  return books;
});

export const addBook = createAsyncThunk('books/addBook', async (data) => {
  try {
    await axios.post(url, JSON.stringify(data), { headers })
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error);
      });

    return data;
  } catch (error) {
    throw new Error(error);
  }
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  try {
    await axios.delete(`${url}/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        throw new Error(error);
      });

    return id;
  } catch (error) {
    throw new Error(error);
  }
});

const generateObj = (data) => {
  const List = Object.keys(data);
  const bookList = [];
  for (let i = 0; i < List.length; i += 1) {
    bookList[i] = {
      id: List[i],
      author: data[List[i]][0].author,
      title: data[List[i]][0].title,
      category: data[List[i]][0].category,
    };
  }
  return bookList;
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    ADD_BOOK: {
      reducer(state, { payload }) {
        state.books.push(payload);
      },
      prepare(title, author, category) {
        return {
          payload: {
            title,
            author,
            category,
          },
        };
      },
    },
    REMOVE_BOOK: {
      reducer(state, { payload }) {
        return state.books[payload.id];
      },
    },
  },
  extraReducers(b) {
    b
      .addCase(loadBooks.pending, (state) => ({ ...state, status: 'loading' }))

      .addCase(loadBooks.fulfilled, (state, { payload }) => ({ ...state, status: 'succeeded', books: payload }))

      .addCase(loadBooks.rejected, (state, action) => ({ ...state, status: 'failed', error: action.error.message }))

      .addCase(removeBook.fulfilled, (state, { payload }) => ({ ...state, status: 'succeeded', delete: payload.item_id }))

      .addCase(addBook.fulfilled, (state, { payload }) => ({ ...state, status: 'succeeded', books: generateObj(payload) }));
  },
});

export const getBookList = (state) => state.books.books;
export const getBookStatus = (state) => state.books.status;
export const getBookError = (state) => state.books.error;

export const { ADD_BOOK, REMOVE_BOOK } = booksSlice.actions;

export default booksSlice.reducer;
