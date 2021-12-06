import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function DirectoryItemComponent(props) {
    const {cardItem, itemIndex, handleUpdate} = props;
    return (
        <div className="directory-item">
            <div className="left-block">
                <p>AT</p>
            </div>
            <div className="right-block">
                <p className="name">{cardItem.firstname}</p>
                <p>{cardItem.surname}</p>
                <p>{cardItem.email}</p>
                <p className="number">My Number: {cardItem.number}</p>
            </div>
            <div className="option-block">
                <div className="option-item" onClick={() => handleUpdate(itemIndex)}>
                    <p><FontAwesomeIcon icon={faEdit} /></p>
                </div>
                <div className="option-item">
                    <p><FontAwesomeIcon icon={faTrash} /></p>
                </div>
            </div>
        </div>
    )
}
