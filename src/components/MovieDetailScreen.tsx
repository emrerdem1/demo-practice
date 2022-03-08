import React from 'react';
import { Col, Row } from 'antd';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IFetchSpec, IMovieDetailProps } from '../common/MovieDB.types';
import { getSpecificMovieDetail } from '../common/MovieDB.utils';
import MovieDetailTitleView from './MovieDetailTitleView';
import MovieStandalonePosterView from './MovieStandalonePosterView';
import MovieCastListView from './MovieCastListView';
import MovieGeneralInfoView from './MovieGeneralInfoView';
import { INITIAL_FETCH_STATE } from '../common/MovieDB.constants';

interface IMovieDetailFetchSpec extends IFetchSpec {
  data: IMovieDetailProps | null;
}

const MovieDetailScreen: React.FC = () => {
  const [movieDetail, setMovieDetail] = useState<IMovieDetailFetchSpec>({
    data: null,
    ...INITIAL_FETCH_STATE,
  });
  const { movieId } = useParams();

  if (!movieId) {
    return <div>No ID passed to fetch.</div>;
  }

  useEffect(() => {
    getSpecificMovieDetail(parseInt(movieId)).then((response) => {
      setMovieDetail((prevState) => ({
        ...prevState,
        data: response,
        isSuccess: true,
        isLoading: false,
        isFailure: false,
      }));
    });
  }, [movieId]);

  if (!movieDetail.isSuccess || !movieDetail.data) {
    return <div>Could not find corresponding movie.</div>;
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
  } = movieDetail.data;

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
