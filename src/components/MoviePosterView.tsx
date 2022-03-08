import React from 'react';
import { Link } from 'react-router-dom';
import { TMovieListItemProps } from '../common/MovieDB.types';
import styled from '@emotion/styled';
import moment from 'moment';
import MovieStandalonePosterView from './MovieStandalonePosterView';

const VFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled(VFlex)`
  height: 3em;
  // Fallback value for browsers that do not support clamp().
  font-size: 1.2em;
  font-size: clamp(1.2em, 1.6vw, 1.4em);
  justify-content: space-between;

  .title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    line-height: 1.5em;
    padding-top: 0.1em;
    font-size: inherit;
  }

  .release-date {
    line-height: 1em;
  }
`;

interface IMoviePosterProps {
  movie: TMovieListItemProps;
}
const MoviePosterView: React.FC<IMoviePosterProps> = ({ movie }) => {
  return (
    <Link to={`/detail/${movie.id}`}>
      <VFlex>
        <MovieStandalonePosterView
          source={movie.poster_path}
          vote_average={movie.vote_average}
        />
        <TextContainer>
          <h2 className="title">{movie.title}</h2>
          <h6 className="release-date">
            {moment(movie.release_date).format('ll')}
          </h6>
        </TextContainer>
      </VFlex>
    </Link>
  );
};

export default MoviePosterView;
