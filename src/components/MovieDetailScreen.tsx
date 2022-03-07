import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MovieDBFeatures } from '../common/MovieDB.constants';
import { getMovieDetailApiURL, movieDBApiCall } from '../common/MovieDB.utils';

const MovieDetailScreen: React.FC = () => {
  const { movieId } = useParams();

  if (!movieId) {
    return <div>No ID passed to fetch.</div>;
  }

  const loadSpecificMovie = (id: number) => {
    const movieDetailEndpoint = getMovieDetailApiURL(
      id,
      MovieDBFeatures.DETAILS
    );
    movieDBApiCall({ requestEndpoint: movieDetailEndpoint }).then((response) =>
      console.log(response)
    );
  };

  useEffect(() => {
    loadSpecificMovie(parseInt(movieId));
  }, [movieId]);

  console.log(movieId);
  return <div>ab</div>;
};

export default MovieDetailScreen;
