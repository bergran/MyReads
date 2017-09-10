import React, { Component } from 'react'
import { BookShelf } from './bookShelf'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksList extends Component {

  modifyShelfs = (bookMod, shelfMod) => {
    const { shelfs, updateShelfs } = this.props
    let shelfAux = []
    BooksAPI.update(bookMod, shelfMod).then(data => {
      shelfAux = shelfs[bookMod.shelf].filter(bookSaved =>
        bookMod.id !== bookSaved.id
      )
      shelfs[bookMod.shelf] = shelfAux
      if (shelfMod !== 'none') {
        bookMod.shelf = shelfMod
        shelfs[shelfMod].push(bookMod)
      }
      updateShelfs(shelfs)
    })
  }

  render () {
    const { shelfs, shelfsName, name } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>{ name }</h1>
        </div>
        <div className="list-books-content">
          {
            shelfsName.getNames().filter(name => name !== 'none').map(( name, index ) =>
                  {
                    const valueShelf = shelfsName.getValue(name)
                    return <BookShelf key={index}
                      books={shelfs[valueShelf]}
                      title={ name }
                      selectShelf={this.modifyShelfs}
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
