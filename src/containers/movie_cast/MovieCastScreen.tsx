import React from 'react';
import { getSpecificMovieCast } from 'helpers/api/requests';
import DataNotFoundView from 'components/common/DataNotFoundView';
import LoaderView from 'components/common/LoaderView';
import MovieCastListView from 'components/movie_cast/MovieCastView';
import useFetch from 'hooks/useFetch';
import FetchFailedView from 'components/common/FetchFailedView';

interface IMovieCastListProps {
  movieId: string;
}

const MovieCastScreen: React.FC<IMovieCastListProps> = ({ movieId }) => {
  const { data, isLoading, isFailure } = useFetch(() =>
    getSpecificMovieCast(parseInt(movieId))
  );

  if (isLoading) {
    return <LoaderView />;
  }

  if (isFailure) {
    return <FetchFailedView targetDescription="movie cast" />;
  }

  if (!data?.cast || !data.cast.length) {
    return <DataNotFoundView keyText={'cast info exist for the movie'} />;
  }

  return <MovieCastListView cast={data.cast} />;
};

export default MovieCastScreen;
