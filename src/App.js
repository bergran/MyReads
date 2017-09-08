import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './booksList'
import BookSearch from './booksSearch'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  static defaultProps = {
    shelfs:['currentlyReading', 'wantToRead', 'read', 'none']
  }

  state = {
    shelfs: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    },
    load: false
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
    return (
      <div className="app">
        <Route exact path='/' render={
          () => load && <BooksList shelfs={shelfs} shelfsName={this.props.shelfs} />
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
