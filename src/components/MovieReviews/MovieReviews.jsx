// import css from './MovieReviews.module.css';

import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { getMovieReviews } from "../../movies-api";
import { nanoid } from "nanoid";

export default function MovieReviews() {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchMovieReviews(){
            try {
                setError(false)
                const data = await getMovieReviews(movieId);
                setReviews(data);
            } catch (error) {
                setError(true)
            }
        }
        fetchMovieReviews()
    }, [movieId])
  return (<div>
    {error && <div>Sorry we have some troubles</div>}
    {reviews !== null && reviews.length === 0 && <p>There were no reviews.</p>}
    {reviews && reviews.length > 0 && <ul>
        {reviews.map(review => (
            <li key={nanoid()}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
            </li>
        ))}    
    </ul>}
  </div>
    
  )
}
