import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'service/API';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import NoImage from '../images/noImag.png';
import {ReviewsImg, ReviewsLi, ReviewsText, ReviewsUl, Title3} from './Reviews.styled'

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
        <ReviewsUl>
        {reviews.map(({ id, author, author_details, content }) => (
          <ReviewsLi key={id} >
            <ReviewsImg
              src={
                  author_details.avatar_path
                  ? `https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`
                  : NoImage
              }
              alt={author}
              width={'100px'}
            />
            <Title3>{author} </Title3>
            <ReviewsText>{content} </ReviewsText>
          </ReviewsLi>
        ))}
  
  </ReviewsUl>
    ) : (<ReviewsText>We do not have any reviews for this movie.</ReviewsText>)

    }

      <NotificationContainer />
    </>
  );
}
