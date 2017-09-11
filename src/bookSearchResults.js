import React from 'react'
import Book from './book'
import sortBy from 'sort-by'

const BookSearchResult = (props) => {
    const bookSorted = props.books.sort(sortBy('title'))
    return (
    <div className="search-books-results">
        <ol className="books-grid">
            {
                bookSorted.map((book) =>
                    <li key={book.id}>
                        <Book selectShelf={() => {}}
                              {...book}
                        />
                    </li>
                )}
        </ol>
    </div>
    )
}

export { BookSearchResult }
