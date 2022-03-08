export const API_KEY = '6716e688acf4f705126a35a2e51dacbc';
export const MOVIE_DB_API_BASE_URL = 'https://api.themoviedb.org/3/';
export const MOVIE_DB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
export const IMDB_MOVIE_DETAIL_BASE_URL = 'https://www.imdb.com/title/';

export enum MovieDBEndpointPaths {
  MOVIE_BASE = 'movie/',
  POPULAR = 'popular',
  DETAIL = '{movie_id}',
  CAST = 'credits',
}

export enum PosterSizes {
  SM = 'w300',
  MD = 'w500',
  XL = 'original',
}

export enum ScreenRoutes {
  HOME = '/',
  MOVIE_DETAIL = '/detail/:movieId',
  NOT_FOUND = '*',
}
export enum Breakpoints {
  TABLET = 768,
  MOBILE = 576,
}
