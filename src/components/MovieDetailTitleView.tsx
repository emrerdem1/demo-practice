import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import { PageHeader } from 'antd';
import { useNavigate } from 'react-router-dom';
import { ScreenRoutes } from '../common/MovieDB.constants';

const MainTitleDiv = styled.div`
  display: flex;
  font-size: 1.5em;

  .ant-page-header-heading-sub-title {
    font-size: 1.4em;
  }

  .tagline {
    margin-bottom: 1em;
  }
`;

const TaglineDiv = styled.div`
  .ant-page-header {
    padding-top: 0;
  }

  .ant-page-header-heading-sub-title {
    font-size: 1.2em;
  }
`;

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
        <PageHeader title={''} subTitle={tagline} />
      </TaglineDiv>
    </div>
  );
};

export default MovieDetailTitleView;
