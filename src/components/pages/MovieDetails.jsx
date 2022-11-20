import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from 'components/API';
import BackLink from '../GoBackButton';
import NoImage from '../../images/noImag.png';
import { MovieLink } from './Movie.styled';

import { NotificationManager } from 'react-notifications';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(id)
      .then(({ data }) => setMovie(data))
      .catch(error =>
        NotificationManager.warning(
          'Sorry, something went wrong.... Please try again.'
        )
      );
  }, [id]);

  const { poster_path, title, genres, vote_average, overview } = movie;

  return (
    <main>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : NoImage
        }
        alt={title}
        width={'300px'}
      />
      <h2> {title} </h2>
      <p>User Score: {Math.round(vote_average * 10)}%</p>
      <h3>Owerview</h3>
      <p>{overview}</p>
      {genres && (
        <>
          <h3>Genres</h3>

          <ul>
            {genres.map(({ id, name }) => (
              <li key={id}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </>
      )}
      <div>
        <h3>Additional information</h3>
        <ul>
          <li>
            <MovieLink  to="cast">Cast</MovieLink>
          </li>
          <li>
            <MovieLink  to="reviews">Reviews</MovieLink>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
}
