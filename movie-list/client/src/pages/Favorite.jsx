import '../styles/Favorite.css'
import { useMovieContext } from '../context/MovieContext'
import MovieCard from '../components/MovieCard'

function Favorite() {
    const {favorites} = useMovieContext()
console.log(favorites)
    if(favorites) {
        return (
            <div className='favorites'>
                <h3>Favorites</h3>
                <div className='movie-grid'>
                    {favorites.map((movie) => (
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
            </div>
        )
    }

    return (
        <div className="favorites-empty">
            <h2> No Favorites yet</h2>
            <p>Start Adding today!</p>
        </div>
    )
}

export default Favorite