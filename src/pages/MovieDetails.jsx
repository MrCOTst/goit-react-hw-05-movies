import { useParams, useLocation, Outlet } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { getMovieById } from 'service/API';
import BackLink from '../components/GoBackButton';
import NoImage from '../images/noImag.png';
import Spinner from '../components/Spinner/Spinner';
import { NotificationManager } from 'react-notifications';
import {
  DetailMain,
  DetailImg,
  MovieAbout,
  MovieInfo,
  Title2,
  Title3,
  DetailInfo,
  DetailText,
  MovieLink,
} from './MovieDetails.styled';

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
    <DetailMain>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <MovieAbout>
        <DetailImg
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : NoImage
          }
          alt={title}
          width={'300px'}
        />
        <MovieInfo>
          <Title2> {title} </Title2>
          <DetailText>User Score: {Math.round(vote_average * 10)}%</DetailText>
          <Title3>Owerview</Title3>
          <DetailText>{overview}</DetailText>
          {genres && (
            <>
              <Title3>Genres</Title3>

              <ul>
                {genres.map(({ id, name }) => (
                  <li key={id}>
                    <DetailText>{name}</DetailText>
                  </li>
                ))}
              </ul>
            </>
          )}
        </MovieInfo>
      </MovieAbout>

      <DetailInfo>
        <Title3>Additional information</Title3>
        <ul>
          <li>
            <MovieLink to="cast" state={{ from: location.state?.from }}>
              Cast
            </MovieLink>
          </li>
          <li>
            <MovieLink to="reviews" state={{ from: location.state?.from }}>
              Reviews
            </MovieLink>
          </li>
        </ul>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </DetailInfo>
    </DetailMain>
  );
}
