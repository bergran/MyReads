import React from 'react'
import './App.css'
import './bookModal.css'
import BooksList from './booksList'
import BookSearch from './booksSearch'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import { APPNAME } from './constants'

class BooksApp extends React.Component {

  constructor (props) {
    super(props)
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

  updateShelfs = (bookMod, shelfMod) => {
    let { shelf } = this.state
    shelf = shelf.filter(book => book.id !== bookMod.id)
    bookMod.shelf = shelfMod
    shelf.push(bookMod)
    this.setState({shelf})
  }

  fillShelf = books => {
    this.setState({ shelf: books, load: true })
  }

  getBooks = () => {
      return this.state.shelf
  }

  render() {
    const { load } = this.state
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
          () => (<BookSearch
                    onAdd={this.updateShelfs}
                    books={books}
                />)
        }
        />
      </div>
    )
  }
}

export default BooksApp
