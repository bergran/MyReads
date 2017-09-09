import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './booksList'
import BookSearch from './booksSearch'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import { Shelfs } from './shelfObject'

class BooksApp extends React.Component {

  constructor (props) {
    super(props)
    const shelfs = new Shelfs()
    const shelfObject = {}
    shelfs.getAsValue().forEach(name => shelfObject[name] = [])
    this.state = {
      shelfs: shelfObject,
      load: false
    }

  }

  componentDidMount () {
      BooksAPI.getAll().then(books =>
         this.fillShelfs(books)
      ).catch((e) => console.log(e))
    }

  fillShelfs = books => {
    let { shelfs } = this.state
    books.forEach(book => {
      const shelf = book.shelf
      shelfs[shelf].push(book)
    })
    this.setState({ shelfs: shelfs, load: true })
  }

  render() {
    const { shelfs, load } = this.state
    const shelfsObject = new Shelfs()
    console.log('load', load)
    return (
      <div className="app">
        <Route exact path='/' render={
          () => load && <BooksList shelfs={shelfs} shelfsName={shelfsObject} />
        }
        />
        <Route exact path='/search' render={
          () => <BookSearch />
        }
        />
      </div>
    )
  }
}

export default BooksApp
