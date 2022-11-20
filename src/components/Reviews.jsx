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

  //  const {author, avatar_path, content} = reviews;
  return (
    <>
      {reviews.map(({ author, author_details, content }) => (
        <>
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
        </>
      ))}

      <NotificationContainer />
    </>
  );
}
