import { v4 as uuid } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const EDIT_BOOK = 'bookstore/books/EDIT_BOOK';
const initailState = [
  {
    id: uuid().split('-'),
    title: 'Street Accident',
    author: 'Jhon Lee',
    action: 'Story',
    completed: 30,
    currentChap: 'Cahpter 10',
  },
  {
    id: uuid().split('-'),
    title: 'Night Human',
    author: 'Tracy proavo',
    action: 'novol',
    completed: 10,
    currentChap: 'chapter 5',
  },
  {
    id: uuid().split('-'),
    title: 'Computer Theory',
    author: 'Mark Zaker',
    action: 'technology',
    completed: 22,
    currentChap: 'chapter 20',
  },
];

export default function reducer(state = initailState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.id,
          author: action.author,
          action: action.action,
          completed: action.completed,
          currentChap: action.currentChap,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}

// Add Book Action
export const addBook = (book) => ({
  type: ADD_BOOK,
  id: book.id,
  title: book.title,
  author: book.author,
  action: book.action,
  completed: book.completed,
  currentChap: book.currentChap,
});

// Remove Book Action
export const removeBook = (id) => ({ type: REMOVE_BOOK, id });

// Edit Book Action
export const editBook = (id) => ({ type: EDIT_BOOK, id });
