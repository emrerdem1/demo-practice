import React, { useEffect, useState } from 'react';
import { FetchKeys, FETCH_STATES, IFetchSpec } from '../common/MovieDB.fetch';
import { ICastInfo } from '../common/MovieDB.types';
import { getSpecificMovieCast } from '../common/MovieDB.utils';
import DataNotFoundView from './DataNotFoundView';
import LoaderView from './LoaderView';

interface IMovieCastListProps {
  movieId: string;
}

interface IMovieCastFetchSpec extends IFetchSpec {
  data: ICastInfo[] | null;
}

const MovieCastListView: React.FC<IMovieCastListProps> = ({ movieId }) => {
  const [{ data: movieCast, isLoading, isFailure }, setMovieCast] =
    useState<IMovieCastFetchSpec>({
      data: null,
      ...FETCH_STATES[FetchKeys.INITIAL],
    });

  useEffect(() => {
    getSpecificMovieCast(parseInt(movieId))
      .then((response) => {
        setMovieCast((prevState) => ({
          ...prevState,
          data: response.cast,
          ...FETCH_STATES[FetchKeys.SUCCESS],
        }));
      })
      .catch((error) => {
        console.warn(error);
        setMovieCast((prevState) => ({
          ...prevState,
          ...FETCH_STATES[FetchKeys.FAILURE],
        }));
      });
  }, []);

  if (isLoading) {
    return <LoaderView />;
  }

  if (isFailure || !movieCast) {
    return <DataNotFoundView keyText={'movie cast'} />;
  }

  return <div>{movieId}</div>;
};

export default MovieCastListView;
