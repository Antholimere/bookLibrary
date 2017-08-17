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

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BookLibrary
            currentlyReadingBooks={this.state.books.filter((b) => b.shelf === "currentlyReading")}
            wantToReadBooks={this.state.books.filter((b) => b.shelf === "wantToRead")}
            readBooks={this.state.books.filter((b) => b.shelf === "read")}/>
        )} />
        <Route path="/search" render={() => (
          <Search />
        )} />
      </div>
    )
  }
}

export default BooksApp
