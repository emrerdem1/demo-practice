import React from 'react';
import styled from '@emotion/styled';
import { Avatar, List } from 'antd';
import { ICastInfo } from '../../common/api/MovieDB.types';
import { getCastAvatar } from '../../common/api/MovieDB.utils';

const CastListContainer = styled.div`
  margin-top: 1em;

  .ant-spin-container,
  .cast-header {
    padding: 0 2em;
  }
`;

interface IMovieCastListProps {
  cast: ICastInfo[];
}

const MovieCastListView: React.FC<IMovieCastListProps> = ({ cast }) => {
  return (
    <CastListContainer>
      <h5 className="cast-header">Full Cast ({cast.length})</h5>
      <List
        itemLayout="horizontal"
        dataSource={cast}
        pagination={{
          showSizeChanger: false,
          position: 'bottom',
          pageSize: 5,
          responsive: true,
        }}
        renderItem={(member) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={getCastAvatar(member.profile_path)} />}
              title={member.name}
              description={member.character}
            />
          </List.Item>
        )}
      />
    </CastListContainer>
  );
};

export default MovieCastListView;
