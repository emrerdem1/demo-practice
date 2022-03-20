import React, { useEffect, useState } from 'react';
import { FetchKeys, FETCH_STATES, IFetchSpec } from 'helpers/general/fetch';
import { IReviewInfo } from 'helpers/api/types';
import { getSpecificMovieReviews } from 'helpers/api/requests';
import DataNotFoundView from 'components/common/DataNotFoundView';
import LoaderView from 'components/common/LoaderView';
import MovieReviewsView from 'components/movie_reviews';

interface IMovieReviewsScreenProps {
  movieId: string;
}

interface IMovieReviewFetchSpec extends IFetchSpec {
  data: IReviewInfo[] | null;
}

const MovieReviewsScreen: React.FC<IMovieReviewsScreenProps> = ({
  movieId,
}) => {
  const [{ data: movieReviews, isLoading, isFailure }, setMovieReviews] =
    useState<IMovieReviewFetchSpec>({
      data: null,
      ...FETCH_STATES[FetchKeys.INITIAL],
    });

  if (!movieId) {
    return <div>No ID passed to fetch.</div>;
  }

  useEffect(() => {
    getSpecificMovieReviews(parseInt(movieId))
      .then((response) => {
        setMovieReviews((prevState) => ({
          ...prevState,
          data: response.results,
          ...FETCH_STATES[FetchKeys.SUCCESS],
        }));
      })
      .catch((error) => {
        console.warn(error);
        setMovieReviews((prevState) => ({
          ...prevState,
          ...FETCH_STATES[FetchKeys.FAILURE],
        }));
      });
  }, [movieId]);

  // TODO: There are boilerplate fetch conditions, wrap them in HOC to check from single place.
  if (isLoading) {
    return <LoaderView />;
  }

  if (isFailure) {
    return <DataNotFoundView keyText={'reviews'} />;
  }

  if (!movieReviews || !movieReviews.length) {
    return <h6>No reviews exist for the movie.</h6>;
  }

  return <MovieReviewsView reviews={movieReviews} />;
};

export default MovieReviewsScreen;
