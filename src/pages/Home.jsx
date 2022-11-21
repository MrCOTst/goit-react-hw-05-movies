import { useState, useEffect } from 'react';
import { getTrending } from 'service/API';
import { NotificationManager } from 'react-notifications';
import MovieList from 'components/MovieList';
import { Title1 } from './Movie.styled.js';

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending()
      .then(({ data }) => setTrending(data.results))
      .catch(error =>
        NotificationManager.warning(
          'Sorry, something went wrong.... Please try again.'
        )
      );
  }, []);

  return (
    <main>
      <Title1>Trending today</Title1>
      <MovieList trending={trending} />
    </main>
  );
}
