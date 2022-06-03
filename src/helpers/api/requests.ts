import {
  MOVIE_DB_FALLBACK_AVATAR,
  MOVIE_DB_FALLBACK_POSTER,
  PosterSizes,
} from './constants';
import {
  getMovieCastApiURL,
  getMovieDetailApiURL,
  getMovieImagePath,
  getMovieReviewApiURL,
  getMoviesApiURL,
} from './requests.helper';
import {
  ICastSpec,
  IMovieDetailProps,
  IMovieListResponseSpec,
  IReviewSpec,
} from './types';

interface IApiCallProps {
  requestEndpoint: string;
}

const _movieDBApiCall = async <T>({
  requestEndpoint,
}: IApiCallProps): Promise<T> => {
  const movieResponse = await fetch(requestEndpoint);
  if (!movieResponse.ok) {
    throw new Error(
      `Fetch failed, please make sure you have a valid API_KEY. Status: ${movieResponse.status}. Message: ${movieResponse.statusText}.`
    );
  }
  const movieResult = await movieResponse.json();
  return movieResult;
};

export const getMovieList = (): Promise<IMovieListResponseSpec> =>
  _movieDBApiCall({
    requestEndpoint: getMoviesApiURL(),
  });

export const getSpecificMovieDetail = (
  id: number
): Promise<IMovieDetailProps> => {
  const movieDetailEndpoint = getMovieDetailApiURL(id);
  return _movieDBApiCall({ requestEndpoint: movieDetailEndpoint });
};

export const getSpecificMovieCast = (id: number): Promise<ICastSpec> => {
  const movieCastEndpoint = getMovieCastApiURL(id);
  return _movieDBApiCall({ requestEndpoint: movieCastEndpoint });
};

export const getSpecificMovieReviews = (id: number): Promise<IReviewSpec> => {
  const movieReviewEndpoint = getMovieReviewApiURL(id);
  return _movieDBApiCall({ requestEndpoint: movieReviewEndpoint });
};

export const getMoviePoster = (profile_path: string): string => {
  if (!profile_path) return MOVIE_DB_FALLBACK_POSTER;

  return getMovieImagePath({
    size: PosterSizes.SM,
    path: profile_path,
  });
};

export const getCastAvatar = (profile_path: string): string => {
  if (!profile_path) return MOVIE_DB_FALLBACK_AVATAR;

  return getMovieImagePath({
    size: PosterSizes.SM,
    path: profile_path,
  });
};
