import React from 'react';
import styled from '@emotion/styled';
import SearchView from './SearchView';
import MovieListView from './MovieListView';

const HeaderDiv = styled.div`
  display: flex;
  width: 100%;
  padding: 0 1em;
  border-bottom: 1px solid black;
  justify-content: space-between;
`;

const HomepageScreen: React.FC = () => {
  return (
    <>
      <HeaderDiv>
        <h2>Movie Title</h2>
        <SearchView />
      </HeaderDiv>
      <MovieListView />
    </>
  );
};

export default HomepageScreen;
