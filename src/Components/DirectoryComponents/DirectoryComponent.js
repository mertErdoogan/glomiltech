import React from 'react'
import DirectoryItemComponent from './DirectoryItemComponent';

export default function DirectoryComponent(props) {
    const {cardList, handleUpdate} = props;
    return (
        <div className="directory-root">
            <div className="directory-wrapper safe-area">
                <div className="directory-container">
                     {
                         cardList && cardList.map((item, index) => <DirectoryItemComponent key={index} handleUpdate={handleUpdate} itemIndex={index} cardItem={item} />)
                     }
                </div>
            </div>
        </div>
    )
}
