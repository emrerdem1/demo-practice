import { Col, Row } from 'antd';
import React from 'react';
import { IMovieDetailProps } from 'helpers/api/types';
import MovieCastScreen from 'containers/movie_cast';
import MovieGeneralInfoView from './MovieGeneralInfoView';
import MovieReviewsView from 'containers/movie_reviews';
import MovieDetailTitleView from './MovieDetailTitleView';
import MovieStandalonePosterView from 'components/common/MovieStandalonePosterView';

interface IMovieDetailViewProps {
  movieId: string;
  detail: IMovieDetailProps;
}

const MovieDetailView: React.FC<IMovieDetailViewProps> = ({
  detail,
  movieId,
}) => {
  const {
    title,
    tagline,
    poster_path,
    genres,
    overview,
    imdb_id,
    runtime,
    release_date,
    vote_average,
  } = detail;

  return (
    <div>
      <MovieDetailTitleView
        title={title}
        tagline={tagline}
        release_date={release_date}
      />
      <Row justify="space-around">
        <Col xs={24} md={10} xl={8}>
          <MovieStandalonePosterView
            source={poster_path}
            vote_average={vote_average}
            isDetailPagePoster
          />
          <MovieCastScreen movieId={movieId} />
        </Col>
        <Col xs={24} md={14} xl={16}>
          <MovieGeneralInfoView
            genres={genres}
            overview={overview}
            imdb_id={imdb_id}
            runtime={runtime}
            release_date={release_date}
          />
          <MovieReviewsView movieId={movieId} />
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetailView;
