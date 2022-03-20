import {
  API_KEY,
  EndpointPaths,
  UriPatterns,
  MOVIE_DB_API_BASE_URL,
  MOVIE_DB_IMAGE_BASE_URL,
} from './constants';

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

export const getMoviesApiURL = (endpoint: string) => {
  return _generateApiURL({ endpoint });
};

export const getMovieDetailApiURL = (id: number): string => {
  const parsedEndpoint = _replaceApiPathWithID({
    id,
    apiPath: EndpointPaths.MOVIE_DETAIL,
    matchPattern: UriPatterns.MOVIE_ID,
  });
  return _generateApiURL({ endpoint: parsedEndpoint });
};

export const getMovieCastApiURL = (id: number): string => {
  const parsedEndpoint = _replaceApiPathWithID({
    id,
    apiPath: EndpointPaths.MOVIE_CAST,
    matchPattern: UriPatterns.MOVIE_ID,
  });
  return _generateApiURL({ endpoint: parsedEndpoint });
};

export const getMovieReviewApiURL = (id: number): string => {
  const parsedEndpoint = _replaceApiPathWithID({
    id,
    apiPath: EndpointPaths.MOVIE_REVIEWS,
    matchPattern: UriPatterns.MOVIE_ID,
  });
  return _generateApiURL({ endpoint: parsedEndpoint });
};

export const getMovieImagePath = ({
  size,
  path,
}: IMovieImagePathProps): string => MOVIE_DB_IMAGE_BASE_URL + size + path;
