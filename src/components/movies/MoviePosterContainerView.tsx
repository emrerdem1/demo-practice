import React from 'react';
import { Link } from 'react-router-dom';
import { TMovieListItemProps } from 'helpers/api/types';
import moment from 'moment';
import PosterView from 'components/common/PosterView';
import { TextContainer, VFlex } from './MoviePosterContainerView.styled';

interface IMoviePosterContainerProps {
  movie: TMovieListItemProps;
}

const MoviePosterContainerView: React.FC<IMoviePosterContainerProps> = ({
  movie,
}) => {
  return (
    <Link to={`/detail/${movie.id}`}>
      <VFlex>
        <PosterView
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

export default MoviePosterContainerView;
