const API_KEY = "a6f31ab97360378de986735b7264d751";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?/api_key=${API_KEY}`, {
        headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmYzMWFiOTczNjAzNzhkZTk4NjczNWI3MjY0ZDc1MSIsIm5iZiI6MTc0MDA4Nzk0OC4wMTYsInN1YiI6IjY3YjdhMjhjYmM4NGQ1NmNiZWJhMjljZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bhbTf3Yb696tG9Ci9DEY12QvvFdp0SMTPXCsh2jtVog"
        }
    })
    const data = await response.json();
    return data.results
}
export const searchMovie = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${encodeURIComponent(query)}`)
    const data = await response.json();
    return data.results
}