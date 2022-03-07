import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { MovieDBFeatures } from '../common/MovieDB.constants';
import { getMovieList } from '../common/MovieDB.utils';
import MoviePosterView from './MoviePosterView';

const MovieListView: React.FC = () => {
  const [movieList, setMovieList] = useState<Array<any>>([]);

  useEffect(() => {
    getMovieList(MovieDBFeatures.POPULAR).then((response) => {
      setMovieList(response.results);
      console.log(response);
    });
  }, []);

  return (
    <div>
      {movieList.map((movie: any, idx: number) => (
        <MoviePosterView movie={movie} key={movie.backdrop_path + idx} />
      ))}
    </div>
  );
};

export default MovieListView;
