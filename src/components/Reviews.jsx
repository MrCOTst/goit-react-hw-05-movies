import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'components/API';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import NoImage from '../images/noImag.png';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(id)
      .then(({ data }) => setReviews(data.results))
      .catch(error =>
        NotificationManager.warning(
          'Sorry, something went wrong.... Please try again.'
        )
      );
  }, [id]);

  return (
    <>
    {reviews.length > 0 ? (
        <ul>
        {reviews.map(({ id, author, author_details, content }) => (
          <li key={id} >
            <img
              src={
                  author_details.avatar_path
                  ? `https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`
                  : NoImage
              }
              alt={author}
              width={'100px'}
            />
            <h3>{author} </h3>
            <p>{content} </p>
          </li>
        ))}
  
  </ul>
    ) : (<p>We do not have any reviews for this movie.</p>)

    }

      <NotificationContainer />
    </>
  );
}
