import React from 'react';

const AddBook = () => (
  <div className="add-book">
    <form>
      <input
        type="text"
        className="input"
        name="title"
        placeholder="Enter Book Title..."
      />
      <input
        type="text"
        className="input"
        name="author"
        placeholder="Enter Book Author..."
      />
      <button type="submit" className="submit-btn">
        Add Book
      </button>
    </form>
  </div>
);

export default AddBook;
