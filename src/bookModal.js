import React from 'react'


const BookModal = props => {
  const { book } = props
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
          qwerqwer
        </div>
      </div>
    </div>
  )
}

export { BookModal }
