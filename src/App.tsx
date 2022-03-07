import React from 'react';
import styled from '@emotion/styled';
import RoutesView from './containers/RoutesView';

const LayoutDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em;
  margin: 0 auto;
  max-width: 1440px;
`;

const App: React.FC = () => {
  return (
    <LayoutDiv>
      <RoutesView />
    </LayoutDiv>
  );
};

export default App;
