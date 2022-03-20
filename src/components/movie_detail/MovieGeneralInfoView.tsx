import React from 'react';
import { IGenres } from '../../common/api/MovieDB.types';
import { Col, Row, Typography, Anchor, Tag } from 'antd';
import moment from 'moment';
import 'moment-duration-format';
import styled from '@emotion/styled';
import { IMDB_MOVIE_DETAIL_BASE_URL } from '../../common/api/MovieDB.constants';

const VRow = styled(Row)`
  flex-direction: column;
  margin-bottom: 1em;

  .ant-typography-secondary {
    margin-bottom: 0.2em;
  }
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
        <Row>
          {genres.map((genre) => (
            <Col key={genre.id} style={{ paddingBottom: '0.35em' }}>
              <Tag>{genre.name}</Tag>
            </Col>
          ))}
        </Row>
      </VRow>
      <Row justify="space-between" align="middle" style={{ maxWidth: 250 }}>
        <Col>
          <VRow>
            <Typography.Text type="secondary">Runtime</Typography.Text>
            <Typography.Text>
              {moment.duration(runtime, 'minutes').format('h[h] m[m]')}
            </Typography.Text>
          </VRow>
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
