import React from 'react';
import { Link } from 'react-router-dom';

interface IMoviePosterProps {
  movie: any;
}
const MoviePosterView = ({ movie }: IMoviePosterProps) => {
  return <Link to={`/detail/${movie.id}`}>{movie.original_title}</Link>;
};

export default MoviePosterView;
