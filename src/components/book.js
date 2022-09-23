/*eslint-disable */
import React from 'react';

const Book = (props) => (
  <div>
    <li>
      <h2>{props.item.title}</h2>
      <p>{props.item.author}</p>
      <button className="remove-btn">Remove</button>
    </li>
  </div>
);

export default Book;
