import { useState } from "react"
import Modal from "./Modal"
import './modal.css'




export default function ModalTest() {
const [showModal, setShowModal] = useState(false)

function handleToggleModal(){
    setShowModal(!showModal)
}

function onClose() {
    setShowModal(false)
}

    return <div>
        <button onClick={handleToggleModal}>Open Modal</button>
        {
            showModal && <Modal onClose={onClose}/>
        }
    </div>
}