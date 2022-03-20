import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ScreenRoutes } from 'helpers/general/constants';
import DataNotFoundView from 'components/common/DataNotFoundView';
import HomepageScreen from './home';
import MovieDetailScreen from './movie_detail';

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
