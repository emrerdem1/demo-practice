import React from 'react';
import styled from '@emotion/styled';
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

  console.log(movieDetails);
  return (
    <div>
      <MovieDetailTitleView
        title={movieDetails.title}
        tagline={movieDetails.tagline}
        release_date={movieDetails.release_date}
      />
      <Row justify="space-around">
        <Col xs={24} md={10} xl={8}>
          <MovieStandalonePosterView source={movieDetails.poster_path} />
          <MovieCastListView />
        </Col>
        <Col xs={24} md={14} xl={16}>
          <MovieGeneralInfoView
            genres={movieDetails.genres}
            overview={movieDetails.overview}
            imdb_id={movieDetails.imdb_id}
            runtime={movieDetails.runtime}
            release_date={movieDetails.release_date}
          />
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetailScreen;
