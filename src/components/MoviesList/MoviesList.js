import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Wrapper, Card, CardLink, Img, Title } from './MoviesList.styled';
import imgPlaceholder from '../../images/no-poster-available.png';

export function MoviesList({ data: { results } }) {
  const location = useLocation();

  return (
    <Wrapper>
      {results.map(({ id, title, poster_path }) => (
        <Card key={id}>
          <CardLink to={`/movies/${id}`} state={{ from: location }}>
            <Img
              src={
                poster_path
                  ? 'https://image.tmdb.org/t/p/w500' + poster_path
                  : imgPlaceholder
              }
              alt={title}
            />
            <Title>{title}</Title>
          </CardLink>
        </Card>
      ))}
    </Wrapper>
  );
}

MoviesList.propTypes = {
  data: PropTypes.object.isRequired,
};
