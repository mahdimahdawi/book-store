import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    id: '',
    title: '',
    author: '',
    action: '',
    completed: 0,
    currentChp: '',
  });
  const handleEvent = (event) => {
    setBook({
      ...book,
      id: uuid().split('-')[4],
      [event.target.name]: [event.target.value],
    });
  };
  const handleSave = () => {
    if (book.title !== '' && book.author !== '') {
      dispatch(addBook(book));
      navigate('/');
    }
  };
  return (
    <div className="add-book">
      <form>
        <input
          type="text"
          className="input"
          name="title"
          placeholder="Enter Book Title..."
          onChange={(event) => {
            handleEvent(event);
          }}
        />
        <input
          type="text"
          className="input"
          name="author"
          placeholder="Enter Book Author..."
          onChange={(event) => {
            handleEvent(event);
          }}
        />
        <button type="button" className="submit-btn" onClick={handleSave}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
