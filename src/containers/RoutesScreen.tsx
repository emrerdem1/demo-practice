import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ScreenRoutes } from 'helpers/general/constants';
import DataNotFoundView from 'components/common/DataNotFoundView';
import HomeScreen from './home/HomeScreen';
import MovieDetailScreen from './movie_detail/MovieDetailScreen';

const RoutesView: React.FC = () => {
  return (
    <Routes>
      <Route path={ScreenRoutes.HOME} element={<HomeScreen />} />
      <Route path={ScreenRoutes.MOVIE_DETAIL} element={<MovieDetailScreen />} />
      <Route
        path={ScreenRoutes.NOT_FOUND}
        element={<DataNotFoundView keyText="page" hasHomeNavigation />}
      />
    </Routes>
  );
};

export default RoutesView;
