import React from 'react'


const ModalHeader = (title, close) => (
    <div className="modal-header">
        <h1 className="title">{title}</h1>
        <span className="icon icon-right icon-close" onClick={close}>
            <bold>x</bold>
        </span>
    </div>
)

export { ModalHeader }