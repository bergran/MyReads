import React, { Component } from 'react'
import { BookSearchBar } from './bookSearchBar'
import { BookSearchResult } from './bookSearchResults'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

/**
* component that renders book search view and manage all books that are found
* by user query and renders it
*
* @Param Books (Array): Books that are storage on the app, is used to compare
* with result books from search to add them shelf to the book objects
* @Param onAdd (func): it's throwed when user move book to new shelf
**/

class BookSearch extends Component {

  state = {
    books: []
  }

  onSearch = (data) => {
    let books = []
    if (!('error' in data)) {
      books = data.map((book) => {
        const booksSaved = this.props.books
        booksSaved.forEach(bookSave => {
          book.shelf = book.id === bookSave.id ? bookSave.shelf : null
        })
        return book
      })
    }
    this.setState({books})
  }

  onAdd = (bookId, shelfTo) => {
    const { books } = this.state
    const { onAdd } = this.props
    const book = books.filter(book => book.id === bookId)[0]
    book.shelf = shelfTo
    BooksAPI.update(book, shelfTo).then(data => {
      onAdd(book, shelfTo)
    })

  }

  render () {
    const { books } = this.state
    return (
      <div className="search-books">
        <BookSearchBar back='/'
          placeholder='Search by title or author'
          onSearch={this.onSearch}
          />
        <BookSearchResult books={books}
                          onSelect={this.onAdd}
        />
      </div>
    )
  }
}

BookSearch.propTypes = {
  books: PropTypes.array.isRequired,
  onAdd: PropTypes.func.inRequired
}

export default BookSearch
