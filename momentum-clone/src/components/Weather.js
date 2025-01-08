import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {WeatherContainer, Temp} from'./WeatherStyles'

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=33.748550&lon=-84.391502&units=imperial&appid=81a822bda36573fc5a56b549ad01df5f'

const Weather = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
      axios.get(url).then((response) => {
        setData(response.data)
      }).catch((error) => {
        console.log(error)
      })
    },[])

    if(!data) return null

  return (
    <WeatherContainer>
      <Temp>{data.main.temp.toFixed(0)}</Temp>
    </WeatherContainer>
  )
}

export default Weather
