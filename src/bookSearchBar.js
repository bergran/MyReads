import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

/**
* Component that renders Search Bar and request to the API the query and send
* it into callback onSearch.
*
* @Param onSearch (func): Callback function that it's executed inmediatly when
* API resolve promise or if query is empty and send it to this function an
* Array with data
* @Param back (string): contains relative route where will back with Link
* component
* @Param placeholder (string): it's the input placeholder message to the user
**/

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

BookSearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  back: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export { BookSearchBar }
