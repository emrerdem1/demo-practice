import {
  API_KEY,
  MovieDBFeatures,
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

const _generateApiURL = ({ endpoint }: IApiProps): string => {
  return `${MOVIE_DB_API_BASE_URL}${endpoint}?api_key=${API_KEY}`;
};

const _getMovieDetailApiURL = (id: number, detailPath: string): string => {
  const parsedEndpoint = detailPath.replace('{movie_id}', id.toString());
  return _generateApiURL({ endpoint: parsedEndpoint });
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

export const getMovieList = (
  endpoint: string
): Promise<IMovieListResponseSpec> =>
  _movieDBApiCall({
    requestEndpoint: _generateApiURL({ endpoint }),
  });

export const getSpecificMovieDetail = (
  id: number
): Promise<IMovieDetailProps> => {
  const movieDetailEndpoint = _getMovieDetailApiURL(
    id,
    MovieDBFeatures.DETAILS
  );
  return _movieDBApiCall({ requestEndpoint: movieDetailEndpoint });
};
