import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomepageScreen from '../components/HomepageScreen';
import MovieDetailScreen from '../components/MovieDetailScreen';
import PathNotFound from '../components/PathNotFound';

const RoutesView: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomepageScreen />} />
      <Route path="/detail/:movieId" element={<MovieDetailScreen />} />
      <Route path="*" element={<PathNotFound />} />
    </Routes>
  );
};

export default RoutesView;
