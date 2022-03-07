import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMovieDetailProps } from '../common/MovieDB.types';
import { getSpecificMovieDetail } from '../common/MovieDB.utils';

const MovieDetailScreen: React.FC = () => {
  const [movieDetails, setMovieDetails] = useState<IMovieDetailProps | null>(
    null
  );
  const { movieId } = useParams();

  if (!movieId) {
    return <div>No ID passed to fetch.</div>;
  }

  useEffect(() => {
    getSpecificMovieDetail(parseInt(movieId)).then((response) => {
      setMovieDetails(response);
    });
  }, [movieId]);

  if (!movieDetails) {
    return <div>Could not find corresponding movie.</div>;
  }

  return <div>{movieDetails.title}</div>;
};

export default MovieDetailScreen;
