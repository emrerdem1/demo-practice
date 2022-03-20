import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { EndpointPaths } from '../../common/api/MovieDB.constants';
import {
  FetchKeys,
  FETCH_STATES,
  IFetchSpec,
} from '../../common/general/fetch';
import { TMovieListItemProps } from '../../common/api/MovieDB.types';
import { getMovieList } from '../../common/api/MovieDB.utils';
import DataNotFoundView from '../../components/movies/DataNotFoundView';
import LoaderView from '../../components/movies/LoaderView';
import MoviesView from '../../components/movies';

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
    getMovieList(EndpointPaths.POPULAR_MOVIES)
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
