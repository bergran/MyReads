import React, { Component } from 'react'
import { BookSearchBar } from './bookSearchBar'
import { BookSearchResult } from './bookSearchResults'

class BookSearch extends Component {

  state = {
    books: []
  }

  onSearch = (data) => {
    const books = 'error' in data ? [] : data
    this.setState({books})
  }

  render () {
    const { books } = this.state
    return (
      <div className="search-books">
        <BookSearchBar back='/'
          placeholder='Search by title or author'
          onSearch={this.onSearch}
          />
        <BookSearchResult books={books} />
      </div>
    )
  }
}

export default BookSearch
