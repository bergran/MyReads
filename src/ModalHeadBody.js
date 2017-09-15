import React from 'react'

const ModalHeadBody = ({title, image, description}) => (
    <div className='modal-head-body'>
        <div className="modal-cover" style={
            {
                backgroundImage: `url(${image})`
            }}></div>
        <div className='modal-description'>
            <h1 className='title-description'>
                Description
            </h1>
            <div >
                {description}
            </div>
        </div>

    </div>
)

export { ModalHeadBody }