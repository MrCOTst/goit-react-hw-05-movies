import { useState, useEffect } from 'react';
import { getTrending } from 'components/API';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import MovieList from 'components/MovieList';

export default function Home() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    getTrending()
      .then(({ data }) => setTrending(data.results))
      .catch((error) => 
        NotificationManager.warning(
    'Sorry, something went wrong.... Please try again.'
  ));

  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList trending={trending} />
      <NotificationContainer />
    </main>
  );
}

// useEffect(() => {
//     getTrending();
//     if (!trending) return;

//     async function getTrending() {
//       setIsLoading(true);
//       try {
//         const data = await fetchTrending();
//         if (!data.length) {
//           NotificationManager.warning(
//             'Sorry, there are no images matching your search query. Please try again.'
//           );
//         }
//         const foundTrending = data.c.map(
//           ({ id, title }) => {
//             return { id, title };
//           }
//         );
//         setTrending(prevState => [...prevState, ...foundTrending]);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setIsLoading(false);
//       }
//     }

//   }, [trending]);

// NotificationManager.warning(
//     'Sorry, something went wrong.... Please try again.'
//   );
