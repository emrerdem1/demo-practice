import React from 'react';
import { Col, Row } from 'antd';
import { TMovieListItemProps } from '../../common/api/MovieDB.types';
import MoviePosterView from './MoviePosterView';

interface IMoviesViewProps {
  movies: TMovieListItemProps[];
}

const MoviesView: React.FC<IMoviesViewProps> = ({ movies }) => {
  return (
    <Row gutter={[20, 24]} justify="center">
      {movies.map((movie, idx) => (
        <Col
          key={movie.backdrop_path + idx}
          xs={12}
          sm={8}
          md={6}
          lg={5}
          xl={4}
        >
          <MoviePosterView movie={movie} />
        </Col>
      ))}
    </Row>
  );
};

export default MoviesView;
