import React from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './BookShelf';

function BookLibrary(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <Bookshelf
        name="Currently Reading"
        books={props.currentlyReadingBooks}
        onUpdateBook={(book, shelf) => {
          props.onUpdateBook(book, shelf)
        }} />
      <Bookshelf
        name="Want to Read"
        books={props.wantToReadBooks}
        onUpdateBook={(book, shelf) => {
          props.onUpdateBook(book, shelf)
        }} />
      <Bookshelf
        name="Read"
        books={props.readBooks}
        onUpdateBook={(book, shelf) => {
          props.onUpdateBook(book, shelf)
        }} />
      <div className="open-search">
        <Link to="/search" />
      </div>
    </div>
  )
}

export default BookLibrary
