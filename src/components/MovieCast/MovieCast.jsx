import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../movies-api';

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovieCast() {
      try {
        setError(false);
        const data = await getMovieCast(movieId);
        setCast(data);
      } catch (error) {
        setError(true);
      }
    }
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      {error && <p>Sorry, we have some troubles</p>}
      {cast && cast.length > 0 ? (
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt="actor photo"
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We did not find any information about the actors.</p>
      )}
    </div>
  );
}