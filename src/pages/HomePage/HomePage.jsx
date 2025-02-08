import { useEffect, useState } from "react";
// import css from "./HomePage.module.css";
import MovieList from "../../components/MovieList/MovieList"
import { getPopularMovies } from "../../movies-api";

export default function HomePage(){
    const [movies, setMovies] =useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchMovies(){
            try {
                setLoading(true);
                const data = await getPopularMovies();
                setMovies(data);
            } catch (error) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchMovies()
    }, [])

    return(
        <>
        <h2>Trending today</h2>

        {loading && <b>Loading payments...</b>}
        {error && <b>Sorry, we hame some troubles</b>}
        {movies.length > 0 && <MovieList data={movies}/>}

        </>
    )
}