import React, { Component } from 'react'
import { Select } from './select'

const Book = (props) => {
  /*
  * param book: (object) has properties
  */
  const { title, image, author, imageLinks, categories, selectCategories } = props
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.thumbnail})` }}></div>
        <div className="book-shelf-changer">
          <Select categories={categories}
            selectCategorie={() => selectCategories}
            />
        </div>
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{author}</div>
    </div>
  )
}

export default Book
