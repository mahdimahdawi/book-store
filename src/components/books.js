import React from 'react';
import BookList from './bookList';
import AddBook from './addBook';

const Books = () => (
  <div className="books">
    <BookList />
    <AddBook />
  </div>
);

export default Books;
