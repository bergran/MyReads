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
      data.forEach((book) => {
        const booksSaved = this.props.books
        const booksIdentical = booksSaved.filter(bookSave => book.id === bookSave.id)
        if (booksIdentical.length === 0) {
          books.push(book)
        }
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
      const newBooks = books.filter(book => book.id !== bookId)
      onAdd(book, shelfTo)
      this.setState({
          books: newBooks
        })
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
