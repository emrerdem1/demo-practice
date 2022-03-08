import React from 'react';
import { Space, Spin } from 'antd';
import styled from '@emotion/styled';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2em;
`;

const LoaderView: React.FC = () => {
  return (
    <LoaderContainer>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </LoaderContainer>
  );
};

export default LoaderView;
