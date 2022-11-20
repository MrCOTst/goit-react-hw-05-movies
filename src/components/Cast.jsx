import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCast} from 'components/API';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import NoImage from '../images/noImag.png'



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
     <ul>
            {cast.map(({ id, profile_path, name, character }) => (
              <li key={id}>
                <img src={
          profile_path
            ? `https://image.tmdb.org/t/p/w500/${profile_path}`
            : NoImage
        }
        alt={name}
        width={'300px'}
      />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            ))}
          </ul>
          <NotificationContainer />
    </>
  );
}