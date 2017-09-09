import React, { Component } from 'react'
import { BookShelf } from './bookShelf'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksList extends Component {

  modifyBook = (book, shelf) => {

    BooksAPI.update(book, shelf).then(data => {
      console.log(data)
    })
    console.log(book)
    console.log(shelf)
  }

  render () {
    const { shelfs, shelfsName } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {
            shelfsName.getNames().filter(name => name !== 'none').map(( name, index ) =>
                  {
                    const valueShelf = shelfsName.getValue(name)
                    // console.log(valueShelf)
                    // console.log(shelfs)
                    console.log(valueShelf)
                    console.log('selfs', shelfs[valueShelf])
                    return <BookShelf key={index}
                      books={shelfs[valueShelf]}
                      title={ name }
                      selectShelf={this.modifyBook}
                    />
                  }
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
