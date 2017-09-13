import React, { Component } from 'react'
import { BookShelf } from './bookShelf'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'
import { Shelfs } from './shelfObject'

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

BooksList.propTypes = {
  shelfs: PropTypes.object.isRequired,
  updateShelfs: PropTypes.func.isRequired,
  name: PropTypes.string
}

export default BooksList
