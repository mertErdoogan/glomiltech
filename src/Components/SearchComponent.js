import React from 'react'

export default function SearchComponent() {
    return (
        <div className="search-root">
            <div className="search-wrapper safe-area">
                <div className="search-container">
                    <input type="text" placeholder="search..." />
                </div>
            </div>
        </div>
    )
}
