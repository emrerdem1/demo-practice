import { Col, Row } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { MovieDBEndpointPaths } from '../common/MovieDB.constants';
import { FetchKeys, FETCH_STATES, IFetchSpec } from '../common/MovieDB.fetch';
import { TMovieListItemProps } from '../common/MovieDB.types';
import { getMovieList } from '../common/MovieDB.utils';
import DataNotFoundView from './DataNotFoundView';
import LoaderView from './LoaderView';
import MoviePosterView from './MoviePosterView';

interface IMovieListFetchSpec extends IFetchSpec {
  data: TMovieListItemProps[] | null;
}

const MovieListView: React.FC = () => {
  const [{ data: movieList, isLoading, isFailure }, setMovieList] =
    useState<IMovieListFetchSpec>({
      data: null,
      ...FETCH_STATES[FetchKeys.INITIAL],
    });

  useEffect(() => {
    // TODO: Cache the movie list by page number param with pagination.
    getMovieList(MovieDBEndpointPaths.POPULAR_MOVIES)
      .then((response) => {
        setMovieList((prevState) => ({
          ...prevState,
          data: response.results,
          ...FETCH_STATES[FetchKeys.SUCCESS],
        }));
      })
      .catch((error) => {
        console.warn(error);
        setMovieList((prevState) => ({
          ...prevState,
          ...FETCH_STATES[FetchKeys.FAILURE],
        }));
      });
  }, []);

  if (isLoading) {
    return <LoaderView />;
  }

  if (isFailure || !movieList) {
    return <DataNotFoundView keyText={'any movie list'} />;
  }

  // TODO: You should show the UI after all images are loaded to prevent flickering.
  return (
    <Row gutter={[20, 24]} justify="center">
      {movieList.map((movie: TMovieListItemProps, idx: number) => (
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

export default MovieListView;
