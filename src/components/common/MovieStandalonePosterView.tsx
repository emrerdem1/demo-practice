import React from 'react';
import styled from '@emotion/styled';
import { getMoviePoster } from 'helpers/api/requests';

const PosterDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;

  .inner-container {
    position: relative;

    img {
      object-fit: cover;
      height: 100%;
    }
  }
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

interface IStandalonePosterProps {
  source: string;
  vote_average: number;
  isDetailPagePoster?: boolean;
}

const MovieStandalonePosterView: React.FC<IStandalonePosterProps> = ({
  source,
  vote_average,
  isDetailPagePoster,
}) => {
  // TODO: Refactor styled component to take this as props.
  if (isDetailPagePoster) {
    return (
      <PosterDiv>
        <div className="inner-container">
          <img src={getMoviePoster(source)} alt="movie poster" />
          <RatingBadge>{vote_average}</RatingBadge>
        </div>
      </PosterDiv>
    );
  }

  return (
    <ImageContainer>
      <img src={getMoviePoster(source)} alt="movie poster" />
      <RatingBadge>{vote_average}</RatingBadge>
    </ImageContainer>
  );
};

export default MovieStandalonePosterView;
