import React from 'react'
import CustomModalComponent from '../Components/DirectoryComponents/CustomModalComponent';
import DirectoryComponent from '../Components/DirectoryComponents/DirectoryComponent';
import SearchComponent from '../Components/SearchComponent'

export default function HomePageContainer(props) {
    const { 
        cardList, 
        modalCont, 
        setModalCont, 
        handleUpdate, 
        updateState, 
        handleModalFormSubmit, 
        handleModalInput, 
        handleDelete, 
        handleFilter, 
        dropdownControl, 
        filterValues } = props;
    return (
        <div className="home-root">
            <div className="home-wrapper">
                <div className="home-container">
                    <SearchComponent filterValues={filterValues} dropdownControl={dropdownControl} handleFilter={handleFilter} />
                    <DirectoryComponent handleDelete={handleDelete} handleUpdate={handleUpdate} cardList={cardList} />
                    {
                        modalCont && <CustomModalComponent
                            handleModalInput={handleModalInput}
                            handleModalFormSubmit={handleModalFormSubmit}
                            updateState={updateState}
                            modalCont={modalCont}
                            setModalCont={setModalCont}
                        />
                    }
                </div>
            </div>
        </div>
    )
}
