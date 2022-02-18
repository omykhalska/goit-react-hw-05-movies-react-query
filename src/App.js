import { lazy } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Layout } from './components/Layout';
const makeChunk = componentName => {
  return lazy(() =>
    import(`./pages/${componentName}`).then(module => ({
      default: module[componentName],
    })),
  );
};

const HomePage = makeChunk('HomePage');
const MoviesPage = makeChunk('MoviesPage');
const MovieDetailsPage = makeChunk('MovieDetailsPage');
const CastPage = makeChunk('CastPage');
const ReviewsPage = makeChunk('ReviewsPage');

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
