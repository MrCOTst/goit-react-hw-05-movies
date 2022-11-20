import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { HomeText, HomeLink } from './pages/Movie.styled';
import NoImage from '../images/noImag.png'

export default function MovieList({ trending }) {
  const location = useLocation();
  const homeItem = trending.map(({ id, title, backdrop_path }) => {
    return (
      <li key={id}>
        <HomeLink to={`/movies/${id}`} state={{ from: location }}>
          <img
            src={backdrop_path?
              `https://image.tmdb.org/t/p/w300/${backdrop_path}`
            : NoImage}
            alt={title}
          />
          <HomeText>{title}</HomeText>
        </HomeLink>
      </li>
    );
  });

  return <ul>{homeItem}</ul>;
}

MovieList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
