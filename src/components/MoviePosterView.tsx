import React from 'react';
import { Link } from 'react-router-dom';
import { TMovieListItemProps } from '../common/MovieDB.types';

interface IMoviePosterProps {
  movie: TMovieListItemProps;
}
const MoviePosterView = ({ movie }: IMoviePosterProps) => {
  return <Link to={`/detail/${movie.id}`}>{movie.original_title}</Link>;
};

export default MoviePosterView;
