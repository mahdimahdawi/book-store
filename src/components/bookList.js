/*eslint-disable */
import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import Book from "./book";

const BookList = () => {
  const list = useSelector((state) => state.books);
  return (
    <div>
      <ul>
        {list.map((item) => (
          <Book key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
