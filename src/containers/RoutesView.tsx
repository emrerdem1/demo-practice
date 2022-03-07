import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ScreenRoutes } from '../common/MovieDB.constants';
import HomepageScreen from '../components/HomepageScreen';
import MovieDetailScreen from '../components/MovieDetailScreen';
import PathNotFound from '../components/PathNotFound';

const RoutesView: React.FC = () => {
  return (
    <Routes>
      <Route path={ScreenRoutes.HOME} element={<HomepageScreen />} />
      <Route path={ScreenRoutes.MOVIE_DETAIL} element={<MovieDetailScreen />} />
      <Route path={ScreenRoutes.NOT_FOUND} element={<PathNotFound />} />
    </Routes>
  );
};

export default RoutesView;
