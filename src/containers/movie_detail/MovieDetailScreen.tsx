import React from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificMovieDetail } from 'helpers/api/requests';
import LoaderView from 'components/common/LoaderView';
import DataNotFoundView from 'components/common/DataNotFoundView';
import MovieDetailView from 'components/movie_detail/MovieDetailView';
import useFetch from 'hooks/useFetch';
import FetchFailedView from 'components/common/FetchFailedView';
import { ScreenRoutes } from 'helpers/general/constants';
import {
  TGetCustomQueryPath,
  TGetCustomQueryParams,
} from 'helpers/general/types';

type TMovieDetailPath = TGetCustomQueryPath<typeof ScreenRoutes.MOVIE_DETAIL>;
type TMovieDetailQueryParams = TGetCustomQueryParams<TMovieDetailPath>;

const MovieDetailScreen: React.FC = () => {
  const { movieId } = useParams() as TMovieDetailQueryParams;
  const { data, isLoading, isFailure } = useFetch(() =>
    getSpecificMovieDetail(parseInt(movieId))
  );

  if (isLoading) {
    return <LoaderView />;
  }

  if (isFailure) {
    return <FetchFailedView targetDescription="movie detail" />;
  }

  if (!data) {
    return <DataNotFoundView keyText={'movie detail'} hasHomeNavigation />;
  }

  return <MovieDetailView movieId={movieId} detail={data} />;
};

export default MovieDetailScreen;
