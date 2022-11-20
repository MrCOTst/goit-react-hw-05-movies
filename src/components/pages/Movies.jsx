import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieBySearch } from 'components/API';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import MovieList from 'components/MovieList';
import Search from 'components/Search';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  useEffect(() => {
    if (movieName === '') return;

    getMovieBySearch(movieName)
      .then(({ data }) => {
        if (data.results.length === 0) {
          NotificationManager.info(
            `There are no movies on your request "${movieName}".Please try again.`
          );
          setMovies([]);
        }
        setMovies(data.results);
      })
      .catch(error =>
        NotificationManager.warning(
          'Sorry, something went wrong.... Please try again.'
        )
      );
  }, [movieName]);

  const updateQuery = query => {
    setSearchParams(`query=${query}`);
  };

  return (
    <main>
      <Search onSubmit={updateQuery} />
      <MovieList trending={movies} />
      <NotificationContainer />
    </main>
  );
}
