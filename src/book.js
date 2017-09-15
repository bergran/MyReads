import React, { Component } from 'react'
import { SelectShelf } from './select'
import { BookModal } from './bookModal'
import PropTypes from 'prop-types'

/**
* Component that renders a book, it has an event that active modal with data
*
* @param book (object): contains all book properties to show to the user
* @param SelectShelf (func): it's a callback function where is send a book and
* new shelf for him
**/

class Book extends Component {

  constructor (props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  setModal = () => {

    const htmlElement = document.querySelector("html");
    if (!this.state.modal) {
      htmlElement.style.height = '100%'
      htmlElement.style.overflow = 'hidden'
    } else {
      htmlElement.style.height = ''
      htmlElement.style.overflow = 'auto'
    }
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  render () {
    const { modal } = this.state
    const { book, selectShelf } = this.props
    const { id, title, author, imageLinks, shelf='none' } = book
    return (
      <div className="book">
        {
          modal && <BookModal book={book} close={this.setModal} />
        }
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})`}}
          onClick={this.setModal}></div>
          <div className="book-shelf-changer">
            <SelectShelf
              selectShelf={(shelf) => selectShelf(id, shelf)}
              selectedShelf={shelf}
            />
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{author}</div>
      </div>
    )
  }
}

Book.proptTypes = {
  book: PropTypes.object.isRequired,
  selectShelf: PropTypes.func.isRequired
}

export default Book
