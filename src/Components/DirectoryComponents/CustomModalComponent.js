import React from 'react'

export default function CustomModalComponent(props) {
    const {setModalCont, updateState} = props;
    return (
        <div className="modal-root">
            <div className="modal-wrapper">
                <div className="modal-container">
                    <form>
                        <div className="custom-input">
                            <label htmlFor="">Name
                                <input type="text" defaultValue={updateState && updateState.name}/>
                            </label>
                        </div>
                        <div className="custom-input">
                            <label htmlFor="">Number
                                <input type="number" defaultValue={updateState && updateState.number}/>
                            </label>
                        </div>
                    </form>
                    <div className="btn-submit">Kaydet</div>
                    <div onClick={() => setModalCont(false)} className="close-icon">X</div>
                </div>
            </div>
        </div>
    )
}
