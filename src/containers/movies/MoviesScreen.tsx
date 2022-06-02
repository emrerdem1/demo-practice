import React from 'react';
import { getMovieList } from 'helpers/api/requests';
import DataNotFoundView from 'components/common/DataNotFoundView';
import LoaderView from 'components/common/LoaderView';
import MoviesView from 'components/movies/MoviesView';
import useFetch from 'hooks/useFetch';
import FetchFailedView from 'components/common/FetchFailedView';

const MovieListScreen: React.FC = () => {
  const { data, isLoading, isFailure } = useFetch(getMovieList);

  if (isLoading) {
    return <LoaderView />;
  }

  if (isFailure) {
    return <FetchFailedView targetDescription="movie list" />;
  }

  if (!data?.results || !data.results.length) {
    return <DataNotFoundView keyText={'any movie list'} />;
  }

  // TODO: You should show the UI after all images are loaded to prevent flickering.
  return <MoviesView movies={data.results} />;
};

export default MovieListScreen;
