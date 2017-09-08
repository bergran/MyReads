import React, { Component } from 'react'
import { BookShelf } from './bookShelf'
import { Link } from 'react-router-dom'

class BooksList extends Component {

  render () {
    const { shelfs, shelfsName } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {
            shelfsName.filter(name => name !== 'none').map(( name, index ) =>
                  <BookShelf key={index}
                    books={shelfs[name]}
                    title={ name }
                    shelfsName={ shelfsName }
                  />
             )
          }
        </div>
        <div className="open-search">
          <Link to='/search'>Search</Link>
        </div>
      </div>
    )
  }
}

export default BooksList
