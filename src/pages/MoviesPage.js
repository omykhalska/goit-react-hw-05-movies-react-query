import { useSearchParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchMoviesBySearch } from '../services';
import { MoviesList } from '../components/MoviesList';
import { Pagination } from '../components/Pagination';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { SearchBar } from '../components/SearchBar';

export function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const page = Number(searchParams.get('page'));

  const { status, data, isFetching } = useQuery(
    ['movies', query, page],
    () => fetchMoviesBySearch(query, page),
    {
      keepPreviousData: true,
      enabled: !!query,
    },
  );

  function handleSubmit(e) {
    const searchQuery = e.currentTarget.elements.query.value.trim();

    e.preventDefault();
    searchQuery
      ? setSearchParams({
          query: searchQuery,
          page: 1,
        })
      : toast.info('Tape something to search...');
  }

  function onPrevPageBtnClick() {
    setSearchParams({
      query,
      page: Math.max(page - 1, 1),
    });
  }

  function onNextPageBtnClick() {
    setSearchParams({
      query,
      page: page + 1,
    });
  }

  function renderOnSuccess() {
    if (data?.results.length === 0) {
      return <p>No movies found! Try another search keyword</p>;
    }
    return (
      <>
        <MoviesList data={data} />
        {data?.total_pages > 1 && (
          <Pagination
            total={data?.total_pages}
            page={page}
            onPrevPageBtnClick={onPrevPageBtnClick}
            onNextPageBtnClick={onNextPageBtnClick}
          />
        )}
      </>
    );
  }

  return (
    <>
      <SearchBar onFormSubmit={handleSubmit} />
      {(status === 'loading' || isFetching) && <Loader />}
      {status === 'error' && <ErrorMessage />}
      {query && status === 'success' && renderOnSuccess()}
      <ToastContainer position="top-center" />
    </>
  );
}
