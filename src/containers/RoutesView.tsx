import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ScreenRoutes } from '../common/MovieDB.constants';
import DataNotFoundView from '../components/DataNotFoundView';
import HomepageScreen from '../components/HomepageScreen';
import MovieDetailScreen from '../components/MovieDetailScreen';

const RoutesView: React.FC = () => {
  return (
    <Routes>
      <Route path={ScreenRoutes.HOME} element={<HomepageScreen />} />
      <Route path={ScreenRoutes.MOVIE_DETAIL} element={<MovieDetailScreen />} />
      <Route
        path={ScreenRoutes.NOT_FOUND}
        element={<DataNotFoundView keyText="page" hasHomeNavigation />}
      />
    </Routes>
  );
};

export default RoutesView;
