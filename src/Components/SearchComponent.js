import React from 'react'

export default function SearchComponent(props) {
    const { handleFilter, dropdownControl, filterValues } = props;
    return (
        <div className="search-root">
            <div className="search-wrapper safe-area">
                <div className="search-container">
                    <input type="text" placeholder="search..." onChange={(e) => handleFilter(e.target)} />
                    {
                        dropdownControl === true ? <div className="dropdown-block directory-root">
                            <div className="directory-wrapper">
                                <div className="directory-container">
                                    {
                                        filterValues && filterValues.map((item, index) => <div key={index} className="directory-item">
                                            <div className="left-block">
                                                <p>{item.firstname && item.firstname.charAt(0).toUpperCase()}{item.surname && item.surname.charAt(0).toUpperCase()}</p>
                                            </div>
                                            <div className="right-block">
                                                <p className="name">Name: {item.firstname}</p>
                                                <p>Surname: {item.surname}</p>
                                                <p>E-Mail: {item.email}</p>
                                                <p className="number">Number: {item.number}</p>
                                            </div>
                                        </div>)
                                    }

                                </div>
                            </div>
                        </div>
                            :
                            <div></div>
                    }
                </div>
            </div>
        </div>
    )
}
