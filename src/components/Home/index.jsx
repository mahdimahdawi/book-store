import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import {
  loadBooks,
  getBookList,
  getBookStatus,
  addBook,
} from '../../redux/books/books';
import DisplayBook from '../DisplayBook';
import { v4 as uuidv4 } from 'uuid';

const Home = () => {
  const [bookList, setBookList] = useState([]);
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

  const [book, setBook] = useState({
    item_id: "",
    title: "",
    author: "",
    category: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setBook({
      ...book,
      item_id: uuidv4().split("-")[4],
      [event.target.name]: event.target.value,
    });
  };

  const handleCancel = () => {
    navigate("/");
  };

  const handleSave = async () => {
    if (book.title !== "" && book.author !== "") {
      dispatch(addBook(book));
      setBook({
        item_id: "",
        title: "",
        author: "",
        category: "",
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  const renderLoading = () => {
    const spinnerType = "spinningBubbles";
    const spinnerColor = "#0290ff";
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
        {bookList &&
          bookList.map((book) => (
            <li key={book.id} className="book-item">
              <DisplayBook book={book} />
            </li>
          ))}
      </ul>
      <hr />
      <form className="add-book-container">
        <div className="form-title-container">
          <h3>Add A Book</h3>
        </div>
        <div className="body-container">
          <div className="title-container">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={book.title}
              name="title"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="author-container">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              placeholder="Author"
              value={book.author}
              id="author"
              name="author"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="category-container">
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              placeholder="Category"
              value={book.category}
              id="category"
              name="category"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="button-container">
            <button type="button" className="save-button" onClick={handleSave}>
              Save
            </button>
            <button
              type="button"
              className="cancel-button"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  return <>{status === "loading" ? renderLoading() : renderHomeContainer()}</>;
};

export default Home;
