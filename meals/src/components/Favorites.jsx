import React from 'react'
import { useGlobalContext } from '../context'

const Favorites = () => {
  const {favorites, pickMeal, removeFromFavorites} = useGlobalContext()
  return (
    <section className='favorites'>
        <div className="favorites-content">
          <h5>Favorites</h5>
          <div className="favorites-container">
            {favorites.map((favorite) => {
              const {idMeal, strMealThumb:image} = favorite

              return <div className='favorite-item' key={idMeal}>
                <img src={image} className='favorites-img img' alt=''onClick={()=>pickMeal(idMeal, true)} />
                <button className='remove-btn' onClick={()=>removeFromFavorites(idMeal)}>x</button>
              </div>
            })}
          </div>
        </div>
    </section>
  )
}

export default Favorites
