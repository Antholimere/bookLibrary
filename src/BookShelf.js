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
                title={book.title}
                authors={book.authors}
                thumbnail={book.imageLinks.thumbnail}
              />
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf;
