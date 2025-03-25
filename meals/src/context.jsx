import React, {useContext, useEffect, useState} from "react";
import axios from "axios"

const AppContext = React.createContext()
const allMealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealURL = 'https://www.themealdb.com/api/json/v1/1/random.php'

const getFavoritesFromLS = () => {
    let favorites = localStorage.getItem('favorites')

    if(favorites) {
        favorites = JSON.parse(localStorage.getItem('favorites'))
    } else {
        favorites = []
    }
    return favorites
}

const AppProvider = ({children}) => {
    const [meals,setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchMeal, setSearchMeal] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [pickedMeal, setPickedMeal] = useState(null)
    const [favorites, setFavortites] = useState(getFavoritesFromLS())

    const addToFavorites = (idMeal) => {
        console.log(idMeal)
        const meal = meals.find((meal) => meal.idMeal === idMeal)
        const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal)
        if (alreadyFavorite) return
        const updatedFavs = [...favorites, meal];
        setFavortites(updatedFavs)
        localStorage.setItem('favorites', JSON.stringify(updatedFavs))
    }
    console.log(favorites)
    
    const removeFromFavorites = (idMeal) => {
        const updatedFavs = favorites.filter((meal) => meal.idMeal !==idMeal)
        setFavortites(updatedFavs)
    }

    const pickMeal = (idMeal, favorite) => {
        let meal;
        if(favorite){
            meal = favorites.find((meal) => meal.idMeal === idMeal)
        } else {
        meal = meals.find((meal) => meal.idMeal === idMeal)
        }
        setPickedMeal(meal)
        setShowModal(true)
    }

    const getData = async (url) => {
        setLoading(true)
        try {
            const {data} = await axios(url)
            if(data.meals){
                setMeals(data.meals)
            } else {
                setMeals([])
            }
            // const data = await response.json()
        } catch (err) {
            console.log(err.response)
        }
        setLoading(false)
    }
    const getRandomMeal = () => {
        getData(randomMealURL)
    }
    useEffect(()=>{
        getData(allMealsURL)
    },[])

    useEffect(()=>{
        if(!searchMeal) return
        getData(`${allMealsURL}${searchMeal}`)
    },[searchMeal])


    return <AppContext.Provider 
    value={{loading, meals,setSearchMeal, getRandomMeal, showModal, setShowModal, pickMeal, pickedMeal, addToFavorites,removeFromFavorites,favorites}}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}