import { useState, useRef } from "react"
import ReactDOM from "react-dom"

import "./App.css"

export function App() {
    const [showModal, setShowModal] = useState(false)

    const modalResolveRef = useRef(undefined)

    async function handleClick() {
        // Before modal opens
        // do stuff....
        console.log("BEFORE show modal")

        setShowModal(true)

        const result = await new Promise((resolve) => {
            modalResolveRef.current = resolve
        })

        // After user closes modal
        // do stuff....
        console.log("AFTER close modal")

        if (result === "yes") {
            console.log("ok, goodbye!")
        } else {
            console.log("ok, we aren't quitting")
        }
    }

    return (
        <div className="App">
            <button onClick={() => handleClick()}>Open Modal</button>
            {showModal && (
                <Modal
                    closeModal={() => {
                        modalResolveRef.current && modalResolveRef.current("no")
                        setShowModal(false)
                    }}
                >
                    This is the content of the modal
                </Modal>
            )}
        </div>
    )
}

function Modal(props) {
    return ReactDOM.createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
                {props.children}
                <button onClick={() => props.closeModal()}>Close</button>
            </div>
        </div>,
        document.getElementById("portal")
    )
}
