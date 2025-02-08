// import css from "./MoviesPage.module.css"
import { useEffect, useState } from "react";
import MovieSearchForm from "../../components/MovieSearchForm/MovieSearchForm";
import { getMovie } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
export default function MoviesPage(){

    const [movies, setMovies] = useState([])
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();
    const movieParam = searchParams.get("query") ?? ""

    useEffect(() => {
        async function fetchNewMovie(){
            try {
                setError(false);
                setLoading(true);
                const data = await getMovie(movieParam)
                setMovies(data);
            } catch (error) {
              setError(true)  
            } finally {
                setLoading(false)
            }
        }
        fetchNewMovie()
    }, [movieParam, query])

    const handleSearchMovie = newMovie => {
        searchParams.set("query", newMovie);
        setSearchParams(searchParams);
        setQuery(newMovie);
    }
    return(
        <div>
            <MovieSearchForm onSearch={handleSearchMovie}/>
            {error && <p>Sorry, we have some troubles</p>}
            {loading && <p>Loading movies</p>}
            {movies.length > 0 && <MovieList data={movies}/>}
        </div>
    )
}