import React from 'react';
import "./Modal.css";

function Modal({ closeModal }) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => closeModal(false)}> X </button>
                </div>
                <div className="title">
                    <h1>Wow that sure is a modal, bud!</h1>
                </div>
                <div className="body">
                    <p>Time to get the mouse to disappear.</p>
                </div>
                <div className="footer">
                    <button id="cancelBtn" onClick={() => closeModal(false)}>Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Modal