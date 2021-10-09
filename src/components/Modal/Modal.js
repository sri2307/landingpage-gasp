import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'


const Modal = ({view}) => {

    
    const hideModalHandler=()=>{
        view();
    }

    return ReactDOM.createPortal(
        <>
        <div className={classes.backdrop} onClick={hideModalHandler}></div>
        <div className={classes.modal}>
            <div className={classes.modalData}>
                
            <iframe src="https://onedrive.live.com/embed?cid=7B652149F12BC9EE&resid=7B652149F12BC9EE%21127&authkey=ALAmreCdDolQsHk&em=2" width="700px" height="850px"  frameborder="0" scrolling="no"></iframe>
            </div>
        </div>
        </>
       ,document.getElementById('modal')
    )
}

export default Modal