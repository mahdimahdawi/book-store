/*eslint-disable */
import React from "react";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";

const Book = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      <li>
        <h2>{props.item.title}</h2>
        <p>{props.item.author}</p>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeBook(props.item.id));
          }}
        >
          Remove
        </button>
      </li>
    </div>
  );
};

export default Book;
