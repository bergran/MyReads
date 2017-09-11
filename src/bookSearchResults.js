import React from 'react'
import Book from './book'
import sortBy from 'sort-by'

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
                              {...book}
                        />
                    </li>
                )}
        </ol>
    </div>
    )
}

export { BookSearchResult }
