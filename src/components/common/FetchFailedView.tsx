import React from 'react';
import { ScreenRoutes } from 'helpers/general/constants';
import { Link } from 'react-router-dom';

interface IFetchFailedProps {
  targetDescription: string;
}
// TODO: Consider having "Retry" fetch button in this section.
const FetchFailedView: React.FC<IFetchFailedProps> = ({
  targetDescription,
}) => {
  return (
    <div>
      <h6>
        Something unexpected happened while trying to access {targetDescription}
        . Please consider informing the author this happened and try again.
      </h6>
      <Link to={ScreenRoutes.HOME}>Click to return to home.</Link>
    </div>
  );
};

export default FetchFailedView;
