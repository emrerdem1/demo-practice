import React, { useEffect, useState } from 'react';
import { FetchKeys, FETCH_STATES, IFetchSpec } from 'helpers/general/fetch';
import { ICastInfo } from 'helpers/api/types';
import { getSpecificMovieCast } from 'helpers/api/requests';
import DataNotFoundView from 'components/common/DataNotFoundView';
import LoaderView from 'components/common/LoaderView';
import MovieCastListView from 'components/movie_cast';

interface IMovieCastListProps {
  movieId: string;
}

interface IMovieCastFetchSpec extends IFetchSpec {
  data: ICastInfo[] | null;
}

const MovieCastScreen: React.FC<IMovieCastListProps> = ({ movieId }) => {
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
  }, [movieId]);

  if (isLoading) {
    return <LoaderView />;
  }

  // TODO: Consider having "Retry" fetch button in this section.
  if (isFailure) {
    return <DataNotFoundView keyText={'movie cast'} />;
  }

  if (!movieCast || !movieCast.length) {
    return <h6>No cast info exist for the movie.</h6>;
  }

  return <MovieCastListView cast={movieCast} />;
};

export default MovieCastScreen;
