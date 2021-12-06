import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function DirectoryItemComponent(props) {
    const {cardItem, itemIndex, handleUpdate, handleDelete} = props;
    return (
        <div className="directory-item">
            <div className="left-block">
                <p>AT</p>
            </div>
            <div className="right-block">
                <p className="name">Name: {cardItem.firstname}</p>
                <p>Surname: {cardItem.surname}</p>
                <p>E-Mail: {cardItem.email}</p>
                <p className="number">Number: {cardItem.number}</p>
            </div>
            <div className="option-block">
                <div className="option-item" onClick={() => handleUpdate(itemIndex)}>
                    <p><FontAwesomeIcon icon={faEdit} /></p>
                </div>
                <div className="option-item" onClick={() => handleDelete(itemIndex)}>
                    <p><FontAwesomeIcon icon={faTrash} /></p>
                </div>
            </div>
        </div>
    )
}
