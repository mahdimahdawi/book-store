const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/categories/REMOVE_BOOK';
const initailState = {
  title: '',
  author: '',
  id: '',
};

export default function reducer(state = initailState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        { id: action.id, title: action.id, author: action.author },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// Add Book Action
export function addBook(book) {
  return {
    type: ADD_BOOK,
    title: book.title,
    author: book.author,
    id: book.id,
  };
}

// Remove Book Action
export function removeBook(id) {
  return {
    type: REMOVE_BOOK,
    id,
  };
}
