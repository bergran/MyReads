import React, { Component } from 'react'
import { BookSearchBar } from './bookSearchBar'
import { BookSearchResult } from './bookSearchResults'

class BookSearch extends Component {

  state = {
    books: []
  }

  render () {
    const { books } = this.state
    return (
      <div className="search-books">
        <BookSearchBar back='/'
          onChange={() => {}}
          />
        <BookSearchResult books={books} categories={{}} />
      </div>
    )
  }
}

export default BookSearch
