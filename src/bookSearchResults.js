import React from 'react'
import Book from './book'

const BookSearchResult = (props) => (
  <div className="search-books-results">
    <ol className="books-grid">
      {
        props.books.map((book) =>
        <li key={book.id}>
          <Book selectShelf={() => {}}
            {...book}
          />
        </li>
      )}
    </ol>
  </div>
)

export { BookSearchResult }
