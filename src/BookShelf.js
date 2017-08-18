import React, { Component } from 'react';
import Book from './book';

class Bookshelf extends Component {

  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) =>
              <Book
                key={book.id}
                book={book}
                bookUpdate={(book, shelf) => {
                  this.props.onUpdateBook(book, shelf)
                }} />
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf;
