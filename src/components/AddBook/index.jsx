import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import ReactLoading from 'react-loading';
import { addBook, getBookStatus } from '../../redux/books/books';

const AddBook = () => {
  const [requestStatus, setRequestStatus] = useState('idle');
  const [book, setBook] = useState({
    item_id: '',
    title: '',
    author: '',
    category: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const status = useSelector(getBookStatus);

  const handleChange = (event) => {
    setBook({
      ...book,
      item_id: uuidv4().split('-')[4],
      [event.target.name]: event.target.value,
    });
  };

  const handleCancel = () => {
    navigate('/');
  };

  const handleSave = async () => {
    if (book.title !== '' && book.author !== '') {
      setRequestStatus('loading');
      dispatch(addBook(book));
      setBook({
        item_id: '',
        title: '',
        author: '',
        category: '',
      });
      setTimeout(() => {
        setRequestStatus('idle');
        navigate('/');
      }, 2000);
    }
  };

  const renderLoading = () => {
    const spinnerType = 'spinningBubbles';
    const spinnerColor = '#0290ff';
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ReactLoading
          type={spinnerType}
          color={spinnerColor}
          height="20%"
          width="20%"
        />
      </div>
    );
  };

  const renderForm = () => (
    <form className="add-book-container">
      <div className="form-title-container">
        <h3>Add A Book</h3>
      </div>
      <div className="body-container">
        <div className="title-container">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" placeholder="Title" value={book.title} name="title" onChange={(event) => handleChange(event)} />
        </div>
        <div className="author-container">
          <label htmlFor="author">Author:</label>
          <input type="text" placeholder="Author" value={book.author} id="author" name="author" onChange={(event) => handleChange(event)} />
        </div>
        <div className="category-container">
          <label htmlFor="category">Category:</label>
          <input type="text" placeholder="Category" value={book.category} id="category" name="category" onChange={(event) => handleChange(event)} />
        </div>
        <div className="button-container">
          <button type="button" className="save-button" onClick={handleSave}>Save</button>
          <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </form>
  );

  return (
    <>
      {
        status === 'succeeded' && requestStatus === 'idle' ? renderForm() : renderLoading()
      }
    </>
  );
};

export default AddBook;
