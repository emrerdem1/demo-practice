import React from 'react';
import { List, Typography } from 'antd';
import { IReviewInfo } from '../../common/api/MovieDB.types';
import moment from 'moment';
import { ScrollableTextDiv } from './index.styled';

interface IMovieReviewsViewProps {
  reviews: IReviewInfo[];
}

const MovieReviewsView: React.FC<IMovieReviewsViewProps> = ({ reviews }) => {
  return (
    <List
      size="large"
      header={<div>Reviews</div>}
      dataSource={reviews}
      renderItem={(review) => (
        <List.Item>
          <div>
            <Typography.Text type="secondary">
              {review.author} | {moment(review.created_at).format('ll')}
            </Typography.Text>
            <ScrollableTextDiv>
              <Typography.Text>{review.content}</Typography.Text>
            </ScrollableTextDiv>
          </div>
        </List.Item>
      )}
    />
  );
};

export default MovieReviewsView;
