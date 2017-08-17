import React, { Component } from 'react';

class Bookshelf extends Component {
  render() {
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">

          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf;
