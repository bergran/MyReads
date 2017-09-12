import React from 'react'

import { Shelfs } from './shelfObject'
const BookModal = props => {
  const { book } = props
  const shelfObject = new Shelfs()
  const auxShelf = book.shelf || 'none'
  const shelf = shelfObject.getName(auxShelf)
  let starts = []
  for (let i = 0; i < 5; i++) {
    if (i < book.averageRating) {
      starts.push(<div className='rate star'></div>)
    } else {
      starts.push(<div className='rate nstar'></div>)
    }
  }


  return (
    <div className="modal">
      <div className="modalWindow">
        <div className="modal-header">
          <h1 className="title">{book.title}</h1>
          <span className="icon icon-right icon-close" onClick={props.close}>
            <bold>x</bold>
          </span>
        </div>
        <div className="modal-body">
          <div className="modal-cover" style={
            {
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}></div>
          <div className='modal-description'>
              {book.description}
          </div>
          <div className='modal-characters'>
            <ul className='modal-properties'>
              <li className='elementProperty'>
                <p className='property'><strong>Publish date:</strong> {book.publishedDate}</p>
              </li>
              <li className='elementProperty'>
                <p className='property'><strong>Shelf:</strong> { shelf }</p>
              </li>
              <li className='elementProperty'>
                <p className='property'><strong>Shelf:</strong>
                    {starts}
                </p>
              </li>
              <li className='elementProperty'>
                <strong>Authors:</strong>
                <ul>
                    {
                        book.authors.map(
                            author =>
                                <li>
                                    {author}
                                </li>
                        )
                    }
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export { BookModal }
