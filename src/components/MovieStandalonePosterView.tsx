import React from 'react';
import { PosterSizes } from '../common/MovieDB.constants';
import { getMovieImagePath } from '../common/MovieDB.utils';
import styled from '@emotion/styled';

const PosterDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;

  img {
    object-fit: cover;
    height: 100%;
  }
`;

interface IStandalonePosterProps {
  source: string;
}
const MovieStandalonePosterView: React.FC<IStandalonePosterProps> = ({
  source,
}) => {
  return (
    <PosterDiv>
      <img
        src={getMovieImagePath({
          size: PosterSizes.MD,
          path: source,
        })}
        alt="movie poster"
      />
    </PosterDiv>
  );
};

export default MovieStandalonePosterView;
