import React, { Component } from 'react'
import { BookShelf } from './bookShelf'
import { Link } from 'react-router-dom'

class BooksList extends Component {

  render () {
    // this will change
    const bookShelfs = []
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {
              bookShelfs.map((bookShelf) => (
                <BookShelf />
              ))
            }
          </div>
          <div className="open-search">
            <Link to='/search'>Search</Link>
          </div>
        </div>

      </div>
    )
  }
}

export default BooksList
