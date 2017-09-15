import React from 'react'
import Book from './book'
import sortBy from 'sort-by'
import PropTypes from 'prop-types'

/**
* Component that renders list books of search results without shelf order,
* order by book title's
*
* @Param books (Array): contains books object
* @Param onSelect (funct): callback fuction that it's passed to book component
**/

const BookSearchResult = (props) => {
    const bookSorted = props.books.sort(sortBy('title'))
    const { onSelect } = props
    return (
    <div className="search-books-results">
        <ol className="books-grid">
            {
                bookSorted.map((book) =>
                    <li key={book.id}>
                        <Book selectShelf={onSelect}
                              book={book}
                        />
                    </li>
                )}
        </ol>
    </div>
    )
}

BookSearchResult.propTypes = {
  books: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired
}

export { BookSearchResult }
