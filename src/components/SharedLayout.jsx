import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './SharedLayout.styled';
import Spinner from '../components/Spinner/Spinner';

export default function SharedLayout() {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
