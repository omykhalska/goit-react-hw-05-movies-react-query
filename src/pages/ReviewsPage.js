import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../services';
import { Loader } from '../components/Loader';
import { Reviews } from '../components/Reviews';
import { ErrorMessage } from '../components/ErrorMessage';

export function ReviewsPage() {
  const { movieId } = useParams();

  const { isLoading, isError, data } = useQuery(
    ['reviews', movieId],
    () => fetchMovieReviews(movieId),
    {
      select: data => {
        const reviews = data?.results.map(({ id, author, content }) => ({
          id,
          author,
          content,
        }));
        return reviews;
      },
    },
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <ErrorMessage />
      ) : (
        <Reviews reviews={data} />
      )}
    </>
  );
}
