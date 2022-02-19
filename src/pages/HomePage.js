import { useQuery } from 'react-query';
import { fetchPopularMovies } from '../services';
import { PageTitle } from '../components/PageTitle';
import { MoviesList } from '../components/MoviesList';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';

export function HomePage() {
  const { isLoading, isError, data } = useQuery(
    'trendingMovies',
    fetchPopularMovies,
  );

  return (
    <>
      <PageTitle text="Сегодня в тренде" />
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorMessage />
      ) : (
        <>
          <MoviesList data={data} />
        </>
      )}
    </>
  );
}
