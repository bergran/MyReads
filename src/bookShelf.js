import React, { Component } from 'react'
import Book from './book'

class BookShelf extends Component {
  render() {
    const { bookShelf, categories } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookShelf.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              bookShelf.books.map((book) => (
                <Book book={book} />
              ))
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
