import React from 'react';
import styled from '@emotion/styled';
import SearchView from './SearchView';
import MovieListView from './MovieListView';
import { Breakpoints } from '../common/MovieDB.constants';

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1em;
  margin-bottom: 1.2em;
  border-bottom: 1px solid black;
  justify-content: space-between;

  @media (max-width: ${Breakpoints.MOBILE}px) {
    h2 {
      font-size: 1.2em;
    }
  }
`;

const HomepageScreen: React.FC = () => {
  return (
    <>
      <HeaderDiv>
        <h2>MovieDB</h2>
        <SearchView />
      </HeaderDiv>
      <MovieListView />
    </>
  );
};

export default HomepageScreen;
