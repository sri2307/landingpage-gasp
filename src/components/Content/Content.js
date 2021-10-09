import React, { useRef, useEffect,useState } from 'react'
import './Content.css'

import Modal from '../Modal/Modal';


function Content({ timeline }) {
    let h1 = useRef(null);
    let pText = useRef(null);
    let btn = useRef(null);
    useEffect(() => {
        timeline.from([h1.children, pText, btn], 1, {
            opacity: 0,
            y: "100",
            skewY: 10,
            stagger: {
                amount: .4
            }
        }, "-=1")
    })

    const [modal,setModal]=useState(false)

    const viewHandler = () => {
        setModal(state=>!state);

    }

    return (

        <div>
            <div className="content">
                <h1 className="content-inner-bold" ref={el => h1 = el}>
                    <div>Hard work beats talent</div>
                    <br />
                    <div>when talent doesn't work hard.</div>
                </h1>
                <p ref={el => pText = el}>
                    Front-End Web Developer with experience of 3.5 years in building responsive Web Applications using
                    HTML, CSS, Java Script & React Js. Alos, proven experience in integrating AI based Virtual Assistance to
                    React Application.

                </p>
                <button ref={el => btn = el} onClick={viewHandler}>
                    View Resume
                </button>

            </div>
            {modal&&<Modal view={viewHandler}/>}
        </div>


    )
}

export default Content