import React from 'react'
import { Rate } from './rate'
import { ModalHeader } from './modalHeader';
import { ModalHeadBody } from './ModalHeadBody'
import { Shelfs } from './shelfObject'

/**
* Component that renders a modal with more data from book
*
* @param book (object): contains all book properties to show to the user
* @param close (func): func callback to send close new state
**/

const BookModal = props => {
  const { book, close } = props
  const shelfObject = new Shelfs()
  const auxShelf = book.shelf || 'none'
  const shelf = shelfObject.getName(auxShelf)
  return (
    <div className="modal">
      <div className="modalWindow">
        <ModalHeader
            title={book.title}
            close={close}
        />
        <div className="modal-body">
          <ModalHeadBody
            title={book.title}
            image={book.imageLinks.thumbnail}
            description={book.description}
          />
          <div className='modal-characters'>
            <ul className='modal-properties'>
              <li className='elementProperty'>
                <p className='property'><strong>Title:</strong> {book.title}</p>
              </li>
              <li className='elementProperty'>
                <p className='property'><strong>Publish date:</strong> {book.publishedDate}</p>
              </li>
              <li className='elementProperty'>
                <p className='property'><strong>Shelf:</strong> { shelf }</p>
              </li>
              <li className='elementProperty'>
                <div className='property'><strong>Average Rate: <Rate rate={book.averageRating} /></strong>

                </div>
              </li>
              <li className='elementProperty'>
                <p className='property'><strong>Pages:</strong>
                    {book.pageCount}
                </p>
              </li>
              <li className='elementProperty'>
                <strong>Authors:</strong>
                <ul className='authors'>
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

BookModal.propTypes = {
  book: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired
}

export { BookModal }
