import PropTypes from 'prop-types';
import { Outlet, Link, useParams, useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {
  CardWrapper,
  ImgBox,
  Img,
  Title,
  PlayerWrapper,
} from './MovieDetails.styled';
import { GoBackButton } from '../GoBackButton';

export function MovieDetails({ details }) {
  const { title, desc, img, year, votes, genres, videos } = details;
  let { movieId } = useParams();
  const location = useLocation();

  return (
    <>
      <GoBackButton location={location} />
      <CardWrapper>
        <ImgBox>
          <Img src={img} alt={title} />
        </ImgBox>
        <div>
          <Title>
            {title} ({year})
          </Title>
          <p>Рекомендуют: {votes}</p>
          <h2>Обзор</h2>
          <p>{desc}</p>
          <h2>Жанры</h2>
          <p>{genres}</p>
        </div>
      </CardWrapper>
      <hr />
      {videos.length > 0 && (
        <>
          <PlayerWrapper>
            {videos.map(video => (
              <ReactPlayer
                key={video.id}
                url={`https://www.youtube.com/watch?v=${video.key}`}
                controls
              />
            ))}
          </PlayerWrapper>
          <hr />
        </>
      )}
      <h3>Дополнительная информация</h3>
      <ul>
        <li>
          <Link
            to={`/movies/${movieId}/cast`}
            state={location?.state && { from: location.state.from }}
          >
            Актерский состав
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${movieId}/reviews`}
            state={location?.state && { from: location.state.from }}
          >
            Рецензии
          </Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}

MovieDetails.propTypes = {
  details: PropTypes.shape({
    title: PropTypes.string,
    desc: PropTypes.string,
    img: PropTypes.string,
    year: PropTypes.string,
    votes: PropTypes.string,
    genres: PropTypes.string,
    videos: PropTypes.array,
  }).isRequired,
};
