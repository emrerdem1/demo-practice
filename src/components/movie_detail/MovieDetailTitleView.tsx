import React from 'react';
import moment from 'moment';
import { PageHeader } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ScreenRoutes } from '../../common/general/constants';
import { MainTitleDiv, TaglineDiv } from './MovieDetailTitleView.styled';

interface IMovieDetailTitleProps {
  title: string;
  release_date: string;
  tagline: string;
}

const MovieDetailTitleView: React.FC<IMovieDetailTitleProps> = ({
  title,
  release_date,
  tagline,
}) => {
  const navigate = useNavigate();

  return (
    <div>
      <MainTitleDiv>
        <PageHeader
          onBack={() => navigate(ScreenRoutes.HOME)}
          title={title}
          subTitle={`(${moment(release_date).format('YYYY')})`}
        />
      </MainTitleDiv>
      <TaglineDiv>
        <PageHeader subTitle={tagline} />
      </TaglineDiv>
    </div>
  );
};

export default MovieDetailTitleView;
