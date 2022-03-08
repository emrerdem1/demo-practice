import React, { useEffect, useState } from 'react';
import { List, Typography } from 'antd';
import moment from 'moment';
import { FetchKeys, FETCH_STATES, IFetchSpec } from '../common/MovieDB.fetch';
import { IReviewInfo } from '../common/MovieDB.types';
import { getSpecificMovieReviews } from '../common/MovieDB.utils';
import DataNotFoundView from './DataNotFoundView';
import LoaderView from './LoaderView';
import styled from '@emotion/styled';

const ScrollableTextDiv = styled.div`
  overflow: auto;
  max-height: 160px;
  padding-right: 0.8em;

  ::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

interface IMovieReviewsProps {
  movieId: string;
}

interface IMovieReviewFetchSpec extends IFetchSpec {
  data: IReviewInfo[] | null;
}

const MovieReviewsView: React.FC<IMovieReviewsProps> = ({ movieId }) => {
  const [{ data: movieReviews, isLoading, isFailure }, setMovieReviews] =
    useState<IMovieReviewFetchSpec>({
      data: null,
      ...FETCH_STATES[FetchKeys.INITIAL],
    });

  if (!movieId) {
    return <div>No ID passed to fetch.</div>;
  }

  useEffect(() => {
    getSpecificMovieReviews(parseInt(movieId))
      .then((response) => {
        setMovieReviews((prevState) => ({
          ...prevState,
          data: response.results,
          ...FETCH_STATES[FetchKeys.SUCCESS],
        }));
      })
      .catch((error) => {
        console.warn(error);
        setMovieReviews((prevState) => ({
          ...prevState,
          ...FETCH_STATES[FetchKeys.FAILURE],
        }));
      });
  }, [movieId]);

  // TODO: There are boilerplate fetch conditions, wrap them in HOC to check from single place.
  if (isLoading) {
    return <LoaderView />;
  }

  if (isFailure) {
    return <DataNotFoundView keyText={'reviews'} />;
  }

  if (!movieReviews || !movieReviews.length) {
    return <h6>No reviews exist for the movie.</h6>;
  }

  return (
    <List
      size="large"
      header={<div>Reviews</div>}
      dataSource={movieReviews}
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
