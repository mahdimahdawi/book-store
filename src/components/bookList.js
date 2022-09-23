import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './book';

class BookList extends React.Component {
  state = {
    bookList: [
      {
        id: uuidv4,
        title: "Last Girl",
        author: "Jhon Lee",
      },
      {
        id: uuidv4,
        title: "Last Girl",
        author: "Jhon Lee",
      },
      {
        id: uuidv4,
        title: "Last Girl",
        author: "Jhon Lee",
      },
    ],
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.bookList.map((item) => (
            <Book key={item.id} item={item} />
          ))}
        </ul>
      </div>
    );
  };
};

export default BookList;
