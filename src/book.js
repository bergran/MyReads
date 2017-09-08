import React, { Component } from 'react'
import Select from './select'

const Book = (props) => {
  /*
  * param book: (object) has properties
  */

  const { book, categories, selectCategories } = props
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.image})` }}></div>
        <div className="book-shelf-changer">
          <Select categories={categories}
            selectCategories={() => selectCategories}
            />
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.author}</div>
    </div>
  )
}

export default Book
