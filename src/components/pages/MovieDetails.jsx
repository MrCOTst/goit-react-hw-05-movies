import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {getMovieById} from 'components/API';
import BackLink from '../GoBackButton'

import { NotificationManager,
} from 'react-notifications';

export default function MovieDetails () {
const {id} = useParams();
const [movie, setMovie] = useState([]);
const location = useLocation();

const backLinkHref = location.state?.from ?? "/";


useEffect(() =>{
    getMovieById(id)
    .then(({data}) => setMovie(data))
    .catch((error) => 
    NotificationManager.warning(
    'Sorry, something went wrong.... Please try again.'
  ));
}, [id])

const { poster_path, title, genres } = movie;

return (
    <main>
        <BackLink to={backLinkHref}>Go back</BackLink>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <h2> {title} </h2>
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
    </main>
)
}