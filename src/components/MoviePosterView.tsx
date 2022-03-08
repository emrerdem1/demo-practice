import React from 'react';
import { Link } from 'react-router-dom';
import { TMovieListItemProps } from '../common/MovieDB.types';
import { getMoviePoster } from '../common/MovieDB.utils';
import styled from '@emotion/styled';
import moment from 'moment';

const VFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
    position: relative;

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
  }
`;

const RatingBadge = styled.span`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.9em;
  height: 1.8em;
  top: 0.6em;
  right: 0.6em;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  background-color: black;
  border-radius: 0.2em;
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
        <ImageContainer>
          <img src={getMoviePoster(movie.poster_path)} alt="movie poster" />
          <RatingBadge>{movie.vote_average}</RatingBadge>
        </ImageContainer>
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
