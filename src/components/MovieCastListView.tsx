import React, { useEffect, useState } from 'react';
import { INITIAL_FETCH_STATE } from '../common/MovieDB.constants';
import { ICastInfo, IFetchSpec } from '../common/MovieDB.types';
import { getSpecificMovieCast } from '../common/MovieDB.utils';

interface IMovieCastListProps {
  movieId: string;
}

interface IMovieCastFetchSpec extends IFetchSpec {
  data: ICastInfo[] | null;
}

const MovieCastListView: React.FC<IMovieCastListProps> = ({ movieId }) => {
  const [movieCast, setMovieCast] = useState<IMovieCastFetchSpec>({
    data: null,
    ...INITIAL_FETCH_STATE,
  });

  useEffect(() => {
    getSpecificMovieCast(parseInt(movieId)).then((response) => {
      setMovieCast((prevState) => ({
        ...prevState,
        data: response.cast,
        isSuccess: true,
        isLoading: false,
        isFailure: false,
      }));
    });
  }, []);

  if (!movieCast.isSuccess || !movieCast.data) {
    return <div>Could not find any cast info regarding the movie.</div>;
  }

  return <div>{movieId}</div>;
};

export default MovieCastListView;
