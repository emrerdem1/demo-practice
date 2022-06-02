import React from 'react';
import { getSpecificMovieReviews } from 'helpers/api/requests';
import DataNotFoundView from 'components/common/DataNotFoundView';
import LoaderView from 'components/common/LoaderView';
import MovieReviewsView from 'components/movie_reviews/MovieReviews';
import useFetch from 'hooks/useFetch';
import FetchFailedView from 'components/common/FetchFailedView';

interface IMovieReviewsScreenProps {
  movieId: string;
}

const MovieReviewsScreen: React.FC<IMovieReviewsScreenProps> = ({
  movieId,
}) => {
  const { data, isLoading, isFailure } = useFetch(() =>
    getSpecificMovieReviews(parseInt(movieId))
  );

  // TODO: There are boilerplate fetch conditions, wrap them in HOC to check from single place.
  if (isLoading) {
    return <LoaderView />;
  }

  if (isFailure) {
    return <FetchFailedView targetDescription="movie reviews" />;
  }

  if (!data?.results || !data.results.length) {
    return <DataNotFoundView keyText={'reviews for the movie'} />;
  }

  return <MovieReviewsView reviews={data.results} />;
};

export default MovieReviewsScreen;
