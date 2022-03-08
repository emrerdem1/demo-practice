import {
  API_KEY,
  MovieDBEndpointPaths,
  MovieDBEndpointPatterns,
  MOVIE_DB_API_BASE_URL,
  MOVIE_DB_FALLBACK_AVATAR,
  MOVIE_DB_FALLBACK_POSTER,
  MOVIE_DB_IMAGE_BASE_URL,
  PosterSizes,
} from './MovieDB.constants';
import {
  ICastSpec,
  IMovieDetailProps,
  IMovieListResponseSpec,
  IReviewSpec,
} from './MovieDB.types';

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

interface IReplaceApiPathProps {
  id: number;
  apiPath: string;
  matchPattern: string;
}

const _replaceApiPathWithID = ({
  id,
  apiPath,
  matchPattern,
}: IReplaceApiPathProps) => apiPath.replace(matchPattern, id.toString());

const _generateApiURL = ({ endpoint }: IApiProps): string => {
  return `${MOVIE_DB_API_BASE_URL}${endpoint}?api_key=${API_KEY}`;
};

const _getMovieDetailApiURL = (id: number): string => {
  const parsedEndpoint = _replaceApiPathWithID({
    id,
    apiPath: MovieDBEndpointPaths.MOVIE_DETAIL,
    matchPattern: MovieDBEndpointPatterns.MOVIE_ID,
  });
  return _generateApiURL({ endpoint: parsedEndpoint });
};

const _getMovieCastApiURL = (id: number): string => {
  const parsedEndpoint = _replaceApiPathWithID({
    id,
    apiPath: MovieDBEndpointPaths.MOVIE_CAST,
    matchPattern: MovieDBEndpointPatterns.MOVIE_ID,
  });
  return _generateApiURL({ endpoint: parsedEndpoint });
};

const _getMovieReviewApiURL = (id: number): string => {
  const parsedEndpoint = _replaceApiPathWithID({
    id,
    apiPath: MovieDBEndpointPaths.MOVIE_REVIEWS,
    matchPattern: MovieDBEndpointPatterns.MOVIE_ID,
  });
  return _generateApiURL({ endpoint: parsedEndpoint });
};

const _movieDBApiCall = async ({ requestEndpoint }: IApiCallProps) => {
  const movieResponse = await fetch(requestEndpoint);
  if (!movieResponse.ok) {
    throw new Error(
      `Fetch failed, please make sure you have a valid API_KEY. Status: ${movieResponse.status}. Message: ${movieResponse.statusText}.`
    );
  }
  const movieResult = await movieResponse.json();
  return movieResult;
};

const _getMovieImagePath = ({ size, path }: IMovieImagePathProps): string =>
  MOVIE_DB_IMAGE_BASE_URL + size + path;

export const getMovieList = (
  endpoint: string
): Promise<IMovieListResponseSpec> =>
  _movieDBApiCall({
    requestEndpoint: _generateApiURL({ endpoint }),
  });

export const getSpecificMovieDetail = (
  id: number
): Promise<IMovieDetailProps> => {
  const movieDetailEndpoint = _getMovieDetailApiURL(id);
  return _movieDBApiCall({ requestEndpoint: movieDetailEndpoint });
};

export const getSpecificMovieCast = (id: number): Promise<ICastSpec> => {
  const movieCastEndpoint = _getMovieCastApiURL(id);
  return _movieDBApiCall({ requestEndpoint: movieCastEndpoint });
};

export const getSpecificMovieReviews = (id: number): Promise<IReviewSpec> => {
  const movieReviewEndpoint = _getMovieReviewApiURL(id);
  return _movieDBApiCall({ requestEndpoint: movieReviewEndpoint });
};

export const getMoviePoster = (profile_path: string) => {
  if (!profile_path) return MOVIE_DB_FALLBACK_POSTER;

  return _getMovieImagePath({
    size: PosterSizes.SM,
    path: profile_path,
  });
};

export const getCastAvatar = (profile_path: string) => {
  if (!profile_path) return MOVIE_DB_FALLBACK_AVATAR;

  return _getMovieImagePath({
    size: PosterSizes.SM,
    path: profile_path,
  });
};
