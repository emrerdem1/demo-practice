import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FetchKeys, FETCH_STATES, IFetchSpec } from 'helpers/general/fetch';
import { TMovieListItemProps } from 'helpers/api/types';
import { getMovieList } from 'helpers/api/requests';
import DataNotFoundView from 'components/common/DataNotFoundView';
import LoaderView from 'components/common/LoaderView';
import MoviesView from 'components/movies';

interface IMovieListFetchSpec extends IFetchSpec {
  data: TMovieListItemProps[] | null;
}

const MovieListScreen: React.FC = () => {
  const [{ data: movieList, isLoading, isFailure }, setMovieList] =
    useState<IMovieListFetchSpec>({
      data: null,
      ...FETCH_STATES[FetchKeys.INITIAL],
    });

  useEffect(() => {
    // TODO: Cache the movie list by page number param with pagination.
    getMovieList()
      .then((response) => {
        setMovieList((prevState) => ({
          ...prevState,
          data: response.results,
          ...FETCH_STATES[FetchKeys.SUCCESS],
        }));
      })
      .catch((error) => {
        console.warn(error);
        setMovieList((prevState) => ({
          ...prevState,
          ...FETCH_STATES[FetchKeys.FAILURE],
        }));
      });
  }, []);

  if (isLoading) {
    return <LoaderView />;
  }

  if (isFailure || !movieList) {
    return <DataNotFoundView keyText={'any movie list'} />;
  }

  // TODO: You should show the UI after all images are loaded to prevent flickering.
  return <MoviesView movies={movieList} />;
};

export default MovieListScreen;
