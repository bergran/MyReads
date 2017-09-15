import React from 'react'
import './App.css'
import './bookModal.css'
import BooksList from './booksList'
import BookSearch from './booksSearch'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import { Shelfs } from './shelfObject'
import { APPNAME } from './constants'

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

  updateShelfs = (shelfs) => {
    this.setState({shelfs})
  }

  addBook = (book, shelf) => {
    const { shelfs } = this.state
    shelfs[shelf].push(book)
    this.setState({shelfs})
  }

  fillShelfs = books => {
    let { shelfs } = this.state
    books.forEach(book => {
      const shelf = book.shelf
      shelfs[shelf].push(book)
    })
    this.setState({ shelfs: shelfs, load: true })
  }

  getBooks = () => {
      const shelfsObject = new Shelfs()
      const { shelfs } = this.state
      let books = []
      shelfsObject.getAsValue().forEach(shelf => {
          shelfs[shelf].forEach(book => books.push(book))
          }
      )
      return books
  }

  render() {
    const { shelfs, load } = this.state
    const shelfsObject = new Shelfs()
    const books = this.getBooks()
    return (
      <div className="app">
        <Route exact path='/' render={
          () => load && <BooksList
            name={APPNAME}
            shelfs={shelfs}
            shelfsName={shelfsObject}
            updateShelfs={this.updateShelfs}
          />
        }
        />
        <Route exact path='/search' render={
          () => (<BookSearch
                    onAdd={this.addBook}
                    books={books}
                />)
        }
        />
      </div>
    )
  }
}

export default BooksApp
