import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BookSearchBar extends Component {

  searchBookOrAuthor = (query) => {
    const { onSearch } = this.props
    if (query.length > 0) {
      BooksAPI.search(query, 15).then((data) => {
        onSearch(data)
      })
    } else {
      onSearch([])
    }
  }

  render () {
    const { back, placeholder } = this.props
    return (
      <div className="search-books-bar">
        <Link className="close-search" to={back}>Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text"
            placeholder={placeholder}
            onChange={(e) => this.searchBookOrAuthor(e.target.value)} />
        </div>
      </div>
    )
  }
}

export { BookSearchBar }
