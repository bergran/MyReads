import React from 'react'

ModalHeadBody = (image, ) => (
    <div className='modal-head-body'>
        <div className="modal-cover" style={
            {
                backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}></div>
        <div className='modal-description'>
            {book.description}
        </div>
    </div>
)