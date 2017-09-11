import React, { Component } from 'react'
import { SelectShelf } from './select'
import { BookModal } from './bookModal'

class Book extends Component {

  constructor (props) {
    super(props)
    this.state = {
      modal: false
    }
  }

  setModal = () => {
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

export default Book
