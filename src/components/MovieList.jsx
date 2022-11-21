// import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MovieText, MovieLink } from '../pages/Movie.styled';
import NoImage from '../images/noImag.png';
import { MovieUl, MovieLi, MovieImg } from '../pages/Movie.styled';

export default function MovieList({ trending }) {
  const location = useLocation();
  const homeItem = trending.map(({ id, title, backdrop_path }) => {
    return (
      <>
        {trending && (
          <MovieLi key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              <MovieImg
                src={
                  backdrop_path
                    ? `https://image.tmdb.org/t/p/w500/${backdrop_path}`
                    : NoImage
                }
                alt={title}
              />
              <MovieText>{title}</MovieText>
            </MovieLink>
          </MovieLi>
        )}
      </>
    );
  });

  return <MovieUl>{homeItem}</MovieUl>;
}
