import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ProgressBar from 'react-customizable-progressbar';
import ReactLoading from 'react-loading';
import { removeBook } from '../../redux/books/books'
import './style.css';

const DisplayBook = ({
  book: {
    id, title, category, author, completed=64, currentChapter= 'Chapter 3',
  },
}) => {
  const dispatch = useDispatch();
  const [requestStatus, setRequestStatus] = useState('idle');

  const handleDelete = (id) => {
    setRequestStatus('loading');
    dispatch(removeBook(id));

    setTimeout(() => {
      setRequestStatus('idle');
      const { location } = window;
      location.reload();
    }, 4000);
  };

  const renderLoading = () => {
    const spinnerType = 'spinningBubbles';
    const spinnerColor = '#0290ff';
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ReactLoading
          type={spinnerType}
          color={spinnerColor}
          height="10%"
          width="10%"
        />
      </div>
    );
  };

  const renderContainer = () => (
    <div className="list-item">
      <div className="left">
        <p className="category">{category}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <br />
        <div className="bottom-buttons">
          <button type="button" className="buttons">Comments</button>
          <span className="line">&#124;</span>
          <button type="submit" className="buttons" onClick={() => handleDelete(id)}>Remove</button>
          <span className="line">&#124;</span>
          <button type="button" className="buttons">Edit</button>
        </div>
      </div>
      <div className="center">
        <ProgressBar
          radius={30}
          progress={completed}
          strokeWidth={5}
          strokeColor="#379cf6"
          trackStrokeColor="grey"
          strokeLinecap="round"
          trackStrokeWidth={5}
        />
        <div className="indicator">
          <div className="percentage-number">
            {completed === undefined ? 0 : completed}
          %
          </div>
          <div className="completed">
           Completed
          </div>
        </div>
      </div>
      <div className='verticle-line'></div>
      <div className="right">
        <p className="chapter">CURRENT CHAPTER</p>
        <p className="last-chapter">{currentChapter}</p>
        <button type="button" className="update-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );

  return (
    <>
      {
        requestStatus === 'loading' ? renderLoading() : renderContainer()
      }
    </>
  );
};

DisplayBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string,
    completed: PropTypes.number,
    currentChapter: PropTypes.string,
  }),
};

DisplayBook.defaultProps = {
  book: {
    id: '455f93831',
    title: 'Hunger Games',
    category: 'Action',
    author: 'Suzanne Collins',
    completed: 64,
    currentChapter: 'Chapter 17',
  },
};

export default DisplayBook;
