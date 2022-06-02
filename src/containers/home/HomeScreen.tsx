import React from 'react';
import SearchScreen from '../movie_search/MovieSearchScreen';
import MovieListScreen from '../movies/MoviesScreen';
import { HeaderDiv } from './HomeScreen.styled';

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
