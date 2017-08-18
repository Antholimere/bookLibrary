import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../src/BooksAPI';
import Book from './book';

class Search extends Component {

  state = {
    searchResult: [],
    query: ''
  }

  handleChange(event) {
    this.setState({ query: event.target.value })
    BooksAPI.search(this.state.query).then((searchResult) => {
      this.setState({ searchResult: searchResult });
    })
  }

  render() {

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/" className="close-search"></Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                value={this.state.query}
                placeholder="Search by title or author"
                onChange={this.handleChange.bind(this)} />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {typeof this.state.searchResult !== 'undefined' && (
              this.state.searchResult.map((book) =>
                <Book
                key={book.id}
                book={book}
                bookUpdate={(book, shelf) => {
                  this.props.onUpdateBook(book, shelf)
                }}
                />
              )
            )}
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
