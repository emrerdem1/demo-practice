import React from 'react';
import { IGenres } from '../common/MovieDB.types';
import { Col, Row, Typography, Anchor } from 'antd';
import moment from 'moment';
import styled from '@emotion/styled';
import { IMDB_MOVIE_DETAIL_BASE_URL } from '../common/MovieDB.constants';

const VRow = styled(Row)`
  flex-direction: column;
`;

interface IGeneralInfoProps {
  genres: IGenres[];
  imdb_id: string;
  overview: string;
  runtime: number;
  release_date: string;
}

const MovieGeneralInfoView: React.FC<IGeneralInfoProps> = ({
  genres,
  imdb_id,
  overview,
  runtime,
  release_date,
}) => {
  return (
    <div>
      <VRow>
        <Typography.Text type="secondary">Release date:</Typography.Text>
        <Typography.Text>{moment(release_date).format('ll')}</Typography.Text>
      </VRow>
      <VRow>
        <Typography.Text type="secondary">Genre</Typography.Text>
        {genres.map((genre) => (
          <Col key={genre.id}>
            <Typography.Text>{genre.name}</Typography.Text>
          </Col>
        ))}
      </VRow>
      <Row>
        <Col>
          <Typography.Text type="secondary">Runtime</Typography.Text>
          <Typography.Text>{runtime}</Typography.Text>
        </Col>
        <Col>
          <Anchor affix={false}>
            <Anchor.Link
              href={IMDB_MOVIE_DETAIL_BASE_URL + imdb_id}
              title="IMBD"
              target="_blank"
            />
          </Anchor>
        </Col>
      </Row>
      <VRow>
        <Typography.Text type="secondary">Description</Typography.Text>
        <Typography.Text>{overview}</Typography.Text>
      </VRow>
    </div>
  );
};

export default MovieGeneralInfoView;
