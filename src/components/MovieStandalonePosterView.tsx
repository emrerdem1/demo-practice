import React from 'react';
import styled from '@emotion/styled';
import { getMoviePoster } from '../common/MovieDB.utils';

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
      <img src={getMoviePoster(source)} alt="movie poster" />
    </PosterDiv>
  );
};

export default MovieStandalonePosterView;
