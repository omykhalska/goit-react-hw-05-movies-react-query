import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchMovieCredits } from '../services';
import { Loader } from '../components/Loader';
import { Cast } from '../components/Cast';
import { ErrorMessage } from '../components/ErrorMessage';
import imgPlaceholder from '../images/no-image.png';

export function CastPage() {
  const { movieId } = useParams();

  const { isLoading, isError, data } = useQuery(
    ['cast', movieId],
    () => fetchMovieCredits(movieId),
    {
      select: data => {
        const castDetails = data?.cast.map(
          ({ cast_id, character, name, profile_path }) => ({
            key: cast_id,
            name,
            character,
            photo: profile_path
              ? 'https://image.tmdb.org/t/p/w500' + profile_path
              : imgPlaceholder,
          }),
        );
        return castDetails;
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
        <Cast data={data} />
      )}
    </>
  );
}
