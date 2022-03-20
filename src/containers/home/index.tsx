import React from 'react';
import SearchScreen from '../movie_search';
import MovieListScreen from '../movies';
import { HeaderDiv } from './index.styled';

const HomepageScreen: React.FC = () => {
  return (
    <>
      <HeaderDiv>
        <h2>MovieDB</h2>
        <SearchScreen />
      </HeaderDiv>
      <MovieListScreen />
    </>
  );
};

export default HomepageScreen;
