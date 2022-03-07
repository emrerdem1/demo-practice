import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { MovieDBFeatures } from '../common/MovieDB.constants';
import { TMovieListItemProps } from '../common/MovieDB.types';
import { getMovieList } from '../common/MovieDB.utils';
import MoviePosterView from './MoviePosterView';

const MovieListView: React.FC = () => {
  const [movieList, setMovieList] = useState<TMovieListItemProps[]>([]);

  useEffect(() => {
    getMovieList(MovieDBFeatures.POPULAR).then((response) => {
      setMovieList(response.results);
    });
  }, []);

  return (
    <div>
      {movieList.map((movie: TMovieListItemProps, idx: number) => (
        <MoviePosterView movie={movie} key={movie.backdrop_path + idx} />
      ))}
    </div>
  );
};

export default MovieListView;
