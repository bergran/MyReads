import React from 'react'
import { SelectShelf } from './select'

const Book = (props) => {
  /*
  * param book: (object) has properties
  */
  const { id, title, author, imageLinks, shelf, selectShelf } = props
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})`}}></div>
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

export default Book
