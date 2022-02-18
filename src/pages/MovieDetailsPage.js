import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchMovieById } from '../services';
import { Loader } from '../components/Loader';
import { MovieDetails } from '../components/MovieDetails';
import { ErrorMessage } from '../components/ErrorMessage';
import imgPlaceholder from '../images/no-poster-available.png';

export function MovieDetailsPage() {
  let { movieId } = useParams();

  fetchMovieById(movieId);
  const { data, isLoading, isError } = useQuery(
    ['movie', movieId],
    () => fetchMovieById(movieId),
    {
      select: ({
        title,
        overview,
        poster_path,
        release_date,
        vote_average,
        genres,
      }) => ({
        title,
        desc: overview ? overview : 'There is no overview',
        img: poster_path
          ? 'https://image.tmdb.org/t/p/w500' + poster_path
          : imgPlaceholder,
        year: release_date ? release_date.slice(0, 4) : 'year n/a',
        votes: vote_average ? vote_average * 10 + '%' : 'no rating yet',
        genres:
          genres.length === 0
            ? 'Genres not defined.'
            : genres.map(genre => genre.name).join(', '),
      }),
    },
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorMessage />
      ) : (
        <MovieDetails details={data} />
      )}
    </>
  );
}
