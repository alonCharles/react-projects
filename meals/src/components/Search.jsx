import {useState}from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
  const [search, setSearch] = useState('')
  const {setSearchMeal, getRandomMeal} = useGlobalContext()

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(search) {
      setSearchMeal(search)
      setSearch('')
      
    }
  }
  const handleRandom = () => {
    setSearch('')
    setSearchMeal('')
    getRandomMeal()
  }
  return (
    <header className='search-container'>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search Recipes Here!' value={search} onChange={handleSearch} className='form-input'></input>
        <button type='submit' className='btn'>Search</button>
        <button type='button' className='btn btn-hipster' onClick={handleRandom}>Random </button>
      </form>
    </header>
  )
}

export default Search
