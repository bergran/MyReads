import React, { Component } from 'react'
import { BookSearchBar } from './bookSearchBar'
import { BookSearchResult } from './bookSearchResults'
import * as BooksAPI from './BooksAPI'

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
          book.id === bookSave.id ? book.shelf = bookSave.shelf : null
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

export default BookSearch
