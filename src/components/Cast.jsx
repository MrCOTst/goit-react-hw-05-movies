import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast } from 'service/API';
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import NoImage from '../images/noImag.png';
import { CastUl, CastLi, CastImg, CastText } from './Cast.styled';

export default function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCast(id)
      .then(({ data }) => setCast(data.cast))
      .catch(error =>
        NotificationManager.warning(
          'Sorry, something went wrong.... Please try again.'
        )
      );
  }, [id]);

  return (
    <>
      <CastUl>
        {cast.map(({ id, profile_path, name, character }) => (
          <CastLi key={id}>
            <CastImg
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : NoImage
              }
              alt={name}
              width={'300px'}
            />
            <CastText>{name}</CastText>
            <CastText>{character}</CastText>
          </CastLi>
        ))}
      </CastUl>
    </>
  );
}
