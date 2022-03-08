import React from 'react';
import { Col, Row } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IMovieDetailProps } from '../common/MovieDB.types';
import { getSpecificMovieDetail } from '../common/MovieDB.utils';
import MovieDetailTitleView from './MovieDetailTitleView';
import MovieStandalonePosterView from './MovieStandalonePosterView';
import MovieCastListView from './MovieCastListView';
import MovieGeneralInfoView from './MovieGeneralInfoView';
import { FetchKeys, FETCH_STATES, IFetchSpec } from '../common/MovieDB.fetch';
import LoaderView from './LoaderView';
import DataNotFoundView from './DataNotFoundView';

interface IMovieDetailFetchSpec extends IFetchSpec {
  data: IMovieDetailProps | null;
}

const MovieDetailScreen: React.FC = () => {
  const [{ data: movieDetail, isLoading, isFailure }, setMovieDetail] =
    useState<IMovieDetailFetchSpec>({
      data: null,
      ...FETCH_STATES[FetchKeys.INITIAL],
    });
  const { movieId } = useParams();

  if (!movieId) {
    return <div>No ID passed to fetch.</div>;
  }

  useEffect(() => {
    getSpecificMovieDetail(parseInt(movieId))
      .then((response) => {
        setMovieDetail((prevState) => ({
          ...prevState,
          data: response,
          ...FETCH_STATES[FetchKeys.SUCCESS],
        }));
      })
      .catch((error) => {
        console.warn(error);
        setMovieDetail((prevState) => ({
          ...prevState,
          ...FETCH_STATES[FetchKeys.FAILURE],
        }));
      });
  }, [movieId]);

  if (isLoading) {
    return <LoaderView />;
  }

  if (isFailure || !movieDetail) {
    return <DataNotFoundView keyText={'movie detail'} hasHomeNavigation />;
  }

  const {
    title,
    tagline,
    poster_path,
    genres,
    overview,
    imdb_id,
    runtime,
    release_date,
  } = movieDetail;

  return (
    <div>
      <MovieDetailTitleView
        title={title}
        tagline={tagline}
        release_date={release_date}
      />
      <Row justify="space-around">
        <Col xs={24} md={10} xl={8}>
          <MovieStandalonePosterView source={poster_path} />
          <MovieCastListView movieId={movieId} />
        </Col>
        <Col xs={24} md={14} xl={16}>
          <MovieGeneralInfoView
            genres={genres}
            overview={overview}
            imdb_id={imdb_id}
            runtime={runtime}
            release_date={release_date}
          />
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetailScreen;
