import React from 'react'

export default function HeaderComponent(props) {
    const {handleNewPerson} = props;
    return (
        <div className="header-root">
            <div className="header-wrapper">
                <div className="header-container">
                    <h1>Contancts</h1>
                    <div className="add-icon" onClick={() => handleNewPerson(true)}>
                        <i>+</i>
                    </div>
                </div>
            </div>
        </div>
    )
}
