import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import BookLibrary from './bookLibrary';
import Search from './searchPage';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  handleUpdateBook(book, shelf) {
    BooksAPI.update(book, shelf).then(book => {
      this.setState(state => ({
        books: [...state.books, book]
      }))
    })
  }

  componentDidUpdate() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookLibrary
            currentlyReadingBooks={this.state.books.filter((b) => b.shelf === "currentlyReading")}
            wantToReadBooks={this.state.books.filter((b) => b.shelf === "wantToRead")}
            readBooks={this.state.books.filter((b) => b.shelf === "read")}
            onUpdateBook={(book, shelf) => {
              this.handleUpdateBook(book, shelf)
            }} />
        )} />
        <Route path="/search" render={() => (
          <Search
            onUpdateBook={(book, shelf) => {
              this.handleUpdateBook(book, shelf)
            }} />
        )} />
      </div>
    )
  }
}

export default BooksApp
