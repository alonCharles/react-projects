import { useEffect, useState } from "react"
import { getPopularMovies, searchMovie } from "../services/api"
import MovieCard from "../components/MovieCard"
import '../styles/Home.css'

function Home() {
    const [search, setSearch] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
   
    useEffect(()=> {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            } catch (err) {
                console.log(err);
                setError('Failed to load movies')
            } finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    },[])

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!search.trim()) return
        if(loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovie(search)
            setMovies(searchResults);
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies")
        } finally{
            setLoading(false)
        }

        setSearch("")
    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search for Movies..." className="search-input"/>
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message"> {error}</div>}

            {loading ?
                 (<div className="loading">Loading...</div>)
                  :
                (<div className="movies-grid">
                {movies.map((movie) => (movie.title.toLowerCase().startsWith(search) &&
                (<MovieCard key={movie.id} movie={movie}/>)))}
            </div>)
              }
            
        </div>
    )
}

export default Home