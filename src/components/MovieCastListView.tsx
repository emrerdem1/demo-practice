import { Avatar, List } from 'antd';
import React, { useEffect, useState } from 'react';
import { FetchKeys, FETCH_STATES, IFetchSpec } from '../common/MovieDB.fetch';
import { ICastInfo } from '../common/MovieDB.types';
import { getCastAvatar, getSpecificMovieCast } from '../common/MovieDB.utils';
import DataNotFoundView from './DataNotFoundView';
import LoaderView from './LoaderView';

interface IMovieCastListProps {
  movieId: string;
}

interface IMovieCastFetchSpec extends IFetchSpec {
  data: ICastInfo[] | null;
}

const MovieCastListView: React.FC<IMovieCastListProps> = ({ movieId }) => {
  const [{ data: movieCast, isLoading, isFailure }, setMovieCast] =
    useState<IMovieCastFetchSpec>({
      data: null,
      ...FETCH_STATES[FetchKeys.INITIAL],
    });

  useEffect(() => {
    getSpecificMovieCast(parseInt(movieId))
      .then((response) => {
        console.log(response.cast);

        setMovieCast((prevState) => ({
          ...prevState,
          data: response.cast,
          ...FETCH_STATES[FetchKeys.SUCCESS],
        }));
      })
      .catch((error) => {
        console.warn(error);
        setMovieCast((prevState) => ({
          ...prevState,
          ...FETCH_STATES[FetchKeys.FAILURE],
        }));
      });
  }, []);

  if (isLoading) {
    return <LoaderView />;
  }

  // TODO: Consider having "Retry" fetch button in this section.
  if (isFailure || !movieCast) {
    return <DataNotFoundView keyText={'movie cast'} />;
  }

  if (!movieCast.length) {
    return <h6>No cast info exist for the movie.</h6>;
  }

  return (
    <div>
      <h5>Full Cast ({movieCast.length})</h5>
      <List
        itemLayout="horizontal"
        dataSource={movieCast}
        pagination={{
          showSizeChanger: false,
          position: 'bottom',
          pageSize: 5,
        }}
        renderItem={(member) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={getCastAvatar(member.profile_path)} />}
              title={<a href="https://ant.design">{member.name}</a>}
              description={member.character}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default MovieCastListView;
