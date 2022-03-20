import React from 'react';
import { getMoviePoster } from 'helpers/api/requests';
import { ImageContainer, PosterDiv, RatingBadge } from './PosterView.styled';

interface IStandalonePosterProps {
  source: string;
  vote_average: number;
  isDetailPagePoster?: boolean;
}

const PosterView: React.FC<IStandalonePosterProps> = ({
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

export default PosterView;
