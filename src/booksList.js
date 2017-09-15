import React, { Component } from 'react'
import { BookShelf } from './bookShelf'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import { Shelfs } from './shelfObject'

class BooksList extends Component {

  modifyShelfs = (bookMod, shelfMod) => {
    const { updateShelfs } = this.props
    BooksAPI.update(bookMod, shelfMod).then(data => {
      updateShelfs(bookMod, shelfMod)
    })
  }

  render () {
    const { shelfs, name } = this.props
    const shelfsName = new Shelfs()
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
                    return (<BookShelf key={index}
                      books={shelfs[valueShelf]}
                      title={ name }
                      selectShelf={this.modifyShelfs}
                    />)
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
