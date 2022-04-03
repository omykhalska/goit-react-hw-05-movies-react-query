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
        videos,
      }) => ({
        title,
        desc: overview ? overview : 'Обзор отсутствует.',
        img: poster_path
          ? 'https://image.tmdb.org/t/p/w500' + poster_path
          : imgPlaceholder,
        year: release_date ? release_date.slice(0, 4) : 'неизвестно',
        votes: vote_average
          ? vote_average * 10 + '%'
          : 'пока никто не оценил этот фильм.',
        genres:
          genres.length === 0
            ? 'Жанры не определены.'
            : genres.map(genre => genre.name).join(', '),
        videos:
          videos.results.length > 0
            ? videos.results
                .filter(video => video.official === true)
                .map(video => ({
                  id: video.id,
                  key: video.key,
                }))
            : [],
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
