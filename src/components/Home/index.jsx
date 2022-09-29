import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { loadBooks, getBookList, getBookStatus } from '../../redux/books/books'
import DisplayBook from '../DisplayBook';

const Home = () => {
  const [bookList, setBookList] = useState([]);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const books = useSelector(getBookList);
  const status = useSelector(getBookStatus);

  useEffect(() => {
    dispatch(loadBooks());
  }, [dispatch]);

  useEffect(() => {
    setTimeout(() => {
      const prepareObj = (books) => {
        if (books !== undefined || books !== null || books !== []) {
          const myList = [];

          const keysList = Object.keys(books);

          for (let i = 0; i < keysList.length; i += 1) {
            myList[i] = {
              id: keysList[i],
              author: books[keysList[i]][0].author,
              title: books[keysList[i]][0].title,
              category: books[keysList[i]][0].category,
            };
          }
          return myList;
        }
        return [];
      };
      setBookList(prepareObj(books));
    }, 4000);
  }, [books]);

  const handleAddBook = () => {
    navigation('/add-book');
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

  const renderHomeContainer = () => (
    <div className="home-container">
      <ul className="book-list">
        {
          bookList && bookList.map((book) => (
            <li key={book.id} className="book-item">
              <DisplayBook book={book} />
            </li>
          ))
        }
      </ul>
      <hr />
      <div className="add-book-container">
        <div className="title-container">
          <h4>Add A Book</h4>
        </div>
        <div className="body-container">
          <input type="text" placeholder="Book title" className="book-title" />
          <input type="text" placeholder="Check status" className="book-category" />
          <button type="button" className="add-book-button" onClick={handleAddBook}>Add Book</button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {
        status === 'loading' ? renderLoading() : renderHomeContainer()
      }
    </>
  );
};

export default Home;
