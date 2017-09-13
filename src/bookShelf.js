import React, { Component } from 'react'
import Book from './book'
import PropTypes from 'prop-types'

/**
* Component that renders a bookshelf, this contains shelf name's, books that
* contain specific shelf and selectShelf that is a callback function that
* send book that wants to be moved and shelf location
*
* @Param books (array): contains books object
* @Param title (string): shelf name
* @Param selectShelf (func): callback function that send to parent book object
* and new shelf
**/

class BookShelf extends Component {

  selectShelf = (bookId, shelf) => {
    const { books, selectShelf } = this.props
    const book = books.filter(book => book.id === bookId)[0]
    selectShelf(book, shelf)
  }

  render() {
    const { books, title } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map(book => (
                <li key={book.id}>
                  <Book selectShelf={this.selectShelf}
                  {...book}
                  />
                </li>
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  selectShelf: PropTypes.func.isRequired,
  title: PropTypes.string
}

export { BookShelf }
