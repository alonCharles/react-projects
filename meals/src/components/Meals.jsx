import React from 'react'
import { useGlobalContext } from '../context'

const Meals = () => {
    const {meals, loading, pickMeal,addToFavorites} = useGlobalContext()

    if(loading) {
      return <section className='section'>
        <h4>Loading...</h4>
      </section>
    }

    if(meals.length < 1) {
      return <section className='section'>
        <h4>No Meals to display</h4>
      </section>
    }

  return (
    <section className='section-center'>
      {
        meals.map((meal) => {
          const {idMeal, strMeal:title, strMealThumb:image} = meal
          return <article key={idMeal} className='single-meal'>
            <img src={image} style={{width:'200px'}} className='img' alt='' onClick={()=>pickMeal(idMeal)} />
            <footer>
              <h5>{title}</h5>
              <button className='like-btn' onClick={()=>addToFavorites(idMeal)} >&#x2665;</button>
            </footer>
          </article>
        })
      }
    </section>
  )
}

export default Meals
