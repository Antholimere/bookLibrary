import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Search extends Component {

  state = {
    books: [],
    query: ''
  }

  handleChange(event) {
    this.setState({ query: event.target.value })
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
            <ol className="books-grid"></ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
