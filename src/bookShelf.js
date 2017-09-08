import React, { Component } from 'react'
import Book from './book'

class BookShelf extends Component {
  render() {
    const { books, shelfsName, title } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              books.map(book => (
                <li key={book.id}>
                  <Book categories={shelfsName} selectCategories={() => {}}
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

export { BookShelf }
