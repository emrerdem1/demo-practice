import React from 'react';
import styled from '@emotion/styled';
import moment from 'moment';
import { PageHeader, Typography } from 'antd';

const MainTitleDiv = styled.div`
  display: flex;
  font-size: 1.5em;

  .ant-page-header-heading-sub-title {
    font-size: 1.4em;
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
  return (
    <div>
      <MainTitleDiv>
        <PageHeader
          onBack={() => null}
          title={title}
          subTitle={`(${moment(release_date).format('YYYY')})`}
        />
      </MainTitleDiv>
      <Typography.Text type="secondary">{tagline}</Typography.Text>
    </div>
  );
};

export default MovieDetailTitleView;
