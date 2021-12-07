import React from 'react'

export default function CustomModalComponent(props) {
    const {setModalCont, updateState, handleModalFormSubmit, handleModalInput, emailValid} = props;
    return (
        <div className="modal-root">
            <div className="modal-wrapper">
                <div className="modal-container">
                    <form onSubmit={() => {handleModalFormSubmit()}}>
                        <div className="custom-input">
                            <label htmlFor="">*Name
                                <input name="firstname" required onChange={(e) => handleModalInput(e)} type="text" defaultValue={updateState && updateState.firstname}/>
                            </label>
                        </div>
                        <div className="custom-input">
                            <label htmlFor="">Surname
                                <input name="surname" onChange={(e) => handleModalInput(e)} type="text" defaultValue={updateState && updateState.surname}/>
                            </label>
                        </div>
                        <div className="custom-input">
                            <label htmlFor="">*Email
                                <input name="email" required onChange={(e) => handleModalInput(e)} type="mail" defaultValue={updateState && updateState.email}/>
                            </label>
                        </div>
                        <div className="custom-input">
                            <label htmlFor="">Number
                                <input name="number" onChange={(e) => handleModalInput(e)} type="number" defaultValue={updateState && updateState.number}/>
                            </label>
                        </div>
                        <input type="submit" className={`sub-btn ${emailValid ? '' : 'active'}`} />
                    </form>
                    {/* <div onClick={() => {handleModalFormSubmit()}} className="btn-submit">Kaydet</div> */}
                    <div onClick={() => setModalCont(false)} className={`close-icon`}>X</div>
                </div>
            </div>
        </div>
    )
}
