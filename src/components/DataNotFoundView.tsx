import React from 'react';
import { Link } from 'react-router-dom';
import { ScreenRoutes } from '../common/MovieDB.constants';

interface DataNotFoundProps {
  keyText: string;
  hasHomeNavigation?: boolean;
}

const DataNotFoundView: React.FC<DataNotFoundProps> = ({
  keyText,
  hasHomeNavigation = false,
}) => {
  return (
    <div>
      <p>Could not find corresponding {keyText}.</p>
      {hasHomeNavigation && (
        <Link to={ScreenRoutes.HOME}>Click to return to home.</Link>
      )}
    </div>
  );
};

export default DataNotFoundView;
