import React, { Component } from 'react'
import Book from './book'
import PropTypes from 'prop-types'

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
