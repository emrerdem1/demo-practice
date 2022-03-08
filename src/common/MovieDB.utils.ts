import {
  API_KEY,
  MovieDBEndpointPaths,
  MOVIE_DB_API_BASE_URL,
  MOVIE_DB_IMAGE_BASE_URL,
} from './MovieDB.constants';
import { IMovieDetailProps, IMovieListResponseSpec } from './MovieDB.types';

interface IApiCallProps {
  requestEndpoint: string;
}
interface IApiProps {
  endpoint: string;
}

interface IMovieImagePathProps {
  size: string;
  path: string;
}

const _replaceMovieDetailPathWithID = (id: number, detailPath: string) =>
  detailPath.replace(MovieDBEndpointPaths.DETAIL, id.toString());

const _generateApiURL = ({ endpoint }: IApiProps): string => {
  return `${MOVIE_DB_API_BASE_URL}${MovieDBEndpointPaths.MOVIE_BASE}${endpoint}?api_key=${API_KEY}`;
};

const _getMovieDetailApiURL = (id: number): string => {
  const detailPathWithID = _replaceMovieDetailPathWithID(
    id,
    MovieDBEndpointPaths.DETAIL
  );
  return _generateApiURL({ endpoint: detailPathWithID });
};
const _getMovieCastApiURL = (id: number): string => {
  const detailPathWithID = _replaceMovieDetailPathWithID(
    id,
    MovieDBEndpointPaths.DETAIL
  );
  return _generateApiURL({
    endpoint: `${detailPathWithID}/${MovieDBEndpointPaths.CAST}`,
  });
};

const _movieDBApiCall = async ({ requestEndpoint }: IApiCallProps) => {
  const movieResponse = await fetch(requestEndpoint);
  const movieResult = await movieResponse.json();
  return movieResult;
};

export const getMovieImagePath = ({
  size,
  path,
}: IMovieImagePathProps): string => MOVIE_DB_IMAGE_BASE_URL + size + path;

export const getMovieList = (): Promise<IMovieListResponseSpec> =>
  _movieDBApiCall({
    requestEndpoint: _generateApiURL({
      endpoint: MovieDBEndpointPaths.POPULAR,
    }),
  });

export const getSpecificMovieDetail = (
  id: number
): Promise<IMovieDetailProps> => {
  const movieDetailEndpoint = _getMovieDetailApiURL(id);
  return _movieDBApiCall({ requestEndpoint: movieDetailEndpoint });
};

export const getSpecificMovieCast = (
  id: number
): Promise<IMovieDetailProps> => {
  const movieCastEndpoint = _getMovieCastApiURL(id);
  return _movieDBApiCall({
    requestEndpoint: movieCastEndpoint,
  });
};
