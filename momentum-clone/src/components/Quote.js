import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { QuoteContainer, QuoteText } from './QuoteStyles'
 
const quoteUrl = 'https://zenquotes.io/api/random'
const Quote = () => {
    const [data, setData] = useState(null)

    // const getApi = async (url) => {
    //     const response = await fetch(url)
    //     let data = await response.json()
    //     console.log(data[0].q)
    // }
    useEffect(() => {
        // getApi(quoteUrl)
        axios.get(quoteUrl).then((response) =>{
            setData(response.data[0].q)
        }).catch((error) => {
            console.log(error)
        })
    },[])
console.log(data)
if(!data) return null
  return (
    <QuoteContainer>
      <QuoteText>{data}</QuoteText>
    </QuoteContainer>
  )
}

export default Quote
