import React from 'react';
import { Space, Spin } from 'antd';
import styled from '@emotion/styled';

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 3em;
  height: 100vh;
  width: 100vw;
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
