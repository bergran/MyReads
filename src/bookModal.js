import React from 'react'
import { Rate } from './rate'
import { ModalHeader } from "./modalHeader";

import { Shelfs } from './shelfObject'
const BookModal = props => {
  const { book, close } = props
  const shelfObject = new Shelfs()
  const auxShelf = book.shelf || 'none'
  const shelf = shelfObject.getName(auxShelf)
  return (
    <div className="modal">
      <div className="modalWindow">
        <ModalHeader title={book.title} close={close}/>
        <div className="modal-body">

          <div className='modal-characters'>
            <ul className='modal-properties'>
              <li className='elementProperty'>
                <p className='property'><strong>Publish date:</strong> {book.publishedDate}</p>
              </li>
              <li className='elementProperty'>
                <p className='property'><strong>Shelf:</strong> { shelf }</p>
              </li>
              <li className='elementProperty'>
                <div className='property'><strong>Average Rate:</strong>
                  <Rate rate={book.averageRating} />
                </div>
              </li>
              <li className='elementProperty'>
                <p className='property'><strong>Pages:</strong>
                    {book.pageCount}
                </p>
              </li>
              <li className='elementProperty'>
                <strong>Authors:</strong>
                <ul>
                    {
                        book.authors.map(
                            (author, index) =>
                                <li key={index}>
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
