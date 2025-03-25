import React from 'react'
import { useGlobalContext } from '../context'
const Modal = () => {
  const {pickedMeal, setShowModal} = useGlobalContext()
  const {strMealThumb: image, strMeal:title, strInstructions:text, strSource:source} = pickedMeal
  return (
    <aside className='modal-overlay'>
      <div className="modal-container">
        <img src={image} alt={title} className='img modal-img'/>
        <div className="modal-content">
          <h4><a href={source} rel='noreferrer' target='_blank'>{title}</a></h4>
          <p>Cooking Instructions:</p>
          {text}
        </div>
        <button onClick={()=> setShowModal(false)}>Close</button>
      </div>
    </aside>
  )
}

export default Modal
