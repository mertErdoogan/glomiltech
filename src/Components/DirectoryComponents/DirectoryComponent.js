import React from 'react'
import DirectoryItemComponent from './DirectoryItemComponent';

export default function DirectoryComponent(props) {
    const {cardList, handleUpdate, handleDelete} = props;
    return (
        <div className="directory-root">
            <div className="directory-wrapper safe-area">
                <div className="directory-container">
                     {
                         cardList && cardList.map((item, index) => <DirectoryItemComponent key={index} handleDelete={handleDelete} handleUpdate={handleUpdate} itemIndex={index} cardItem={item} />)
                     }
                </div>
            </div>
        </div>
    )
}
