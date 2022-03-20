import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMovieDetailProps } from '../../common/api/MovieDB.types';
import { getSpecificMovieDetail } from '../../common/api/MovieDB.utils';
import {
  FetchKeys,
  FETCH_STATES,
  IFetchSpec,
} from '../../common/general/fetch';
import LoaderView from '../../components/movies/LoaderView';
import DataNotFoundView from '../../components/movies/DataNotFoundView';
import MovieDetailView from '../../components/movie_detail';

interface IMovieDetailFetchSpec extends IFetchSpec {
  data: IMovieDetailProps | null;
}

const MovieDetailScreen: React.FC = () => {
  const [{ data: movieDetail, isLoading, isFailure }, setMovieDetail] =
    useState<IMovieDetailFetchSpec>({
      data: null,
      ...FETCH_STATES[FetchKeys.INITIAL],
    });
  const { movieId } = useParams();

  if (!movieId) {
    return <div>No ID passed to fetch.</div>;
  }

  useEffect(() => {
    getSpecificMovieDetail(parseInt(movieId))
      .then((response) => {
        setMovieDetail((prevState) => ({
          ...prevState,
          data: response,
          ...FETCH_STATES[FetchKeys.SUCCESS],
        }));
      })
      .catch((error) => {
        console.warn(error);
        setMovieDetail((prevState) => ({
          ...prevState,
          ...FETCH_STATES[FetchKeys.FAILURE],
        }));
      });
  }, [movieId]);

  if (isLoading) {
    return <LoaderView />;
  }

  if (isFailure || !movieDetail) {
    return <DataNotFoundView keyText={'movie detail'} hasHomeNavigation />;
  }

  return <MovieDetailView movieId={movieId} detail={movieDetail} />;
};

export default MovieDetailScreen;
