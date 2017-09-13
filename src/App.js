import React from 'react'
import './App.css'
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
    this.state = {
      shelf: [],
      load: false
    }
  }

  componentDidMount () {
      BooksAPI.getAll().then(books =>
         this.fillShelf(books)
      ).catch((e) => console.log(e))
    }

  updateShelfs = (shelf) => {
    this.setState({shelf})
  }

  addBook = (book, shelfMod) => {
    let { shelf } = this.state
    shelf = shelf.filter(bookSaved => bookSaved.id !== book.id)
    console.log(book)
    shelf.push(book)
    this.setState({shelf})
  }

  fillShelf = books => {
    this.setState({ shelf: books, load: true })
  }

  getBooks = () => {
      return this.state.shelf
  }

  render() {
    const { shelfs, load } = this.state
    const shelfsObject = new Shelfs()
    const books = this.getBooks()
    const shelfObject = {}
    books.forEach(book => {
      if (shelfObject[book.shelf]) {
        shelfObject[book.shelf].push(book)
      } else {
        shelfObject[book.shelf] = [book]
      }
    })
    return (
      <div className="app">
        <Route exact path='/' render={
          () => load && <BooksList
            name={APPNAME}
            shelfs={shelfObject}
            updateShelfs={this.updateShelfs}
          />
        }
        />
        <Route exact path='/search' render={
          () => <BookSearch
                    onAdd={this.addBook}
                    books={books}
                />
        }
        />
      </div>
    )
  }
}

export default BooksApp
