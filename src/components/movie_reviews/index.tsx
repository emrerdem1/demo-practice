import React from 'react';
import { List, Typography } from 'antd';
import { IReviewInfo } from 'helpers/api/types';
import moment from 'moment';
import { ScrollableTextDiv } from './index.styled';

interface IMovieReviewsProps {
  reviews: IReviewInfo[];
}

const MovieReviewsView: React.FC<IMovieReviewsProps> = ({ reviews }) => {
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
