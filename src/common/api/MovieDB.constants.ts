export const API_KEY = '6716e688acf4f705126a35a2e51dacbc';
export const MOVIE_DB_API_BASE_URL = 'https://api.themoviedb.org/3/';
export const MOVIE_DB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
export const IMDB_MOVIE_DETAIL_BASE_URL = 'https://www.imdb.com/title/';
export const MOVIE_DB_FALLBACK_AVATAR = 'https://joeschmoe.io/api/v1/random';
export const MOVIE_DB_FALLBACK_POSTER =
  'https://www.2queue.com/2queue/wp-content/uploads/sites/6/tdomf/4299/movie-poster-coming-soon.png';

enum EndpointKeys {
  MOVIE_DETAIL = 'MOVIE_DETAIL',
  MOVIE_CAST = 'MOVIE_CAST',
  MOVIE_REVIEWS = 'MOVIE_REVIEWS',
  POPULAR_MOVIES = 'POPULAR_MOVIES',
}

export enum UriPatterns {
  BASE = 'movie',
  MOVIE_ID = '{movie_id}',
}

export const EndpointPaths: Record<EndpointKeys, string> = {
  [EndpointKeys.POPULAR_MOVIES]: `${UriPatterns.BASE}/popular`,
  [EndpointKeys.MOVIE_DETAIL]: `${UriPatterns.BASE}/${UriPatterns.MOVIE_ID}`,
  [EndpointKeys.MOVIE_CAST]: `${UriPatterns.BASE}/${UriPatterns.MOVIE_ID}/credits`,
  [EndpointKeys.MOVIE_REVIEWS]: `${UriPatterns.BASE}/${UriPatterns.MOVIE_ID}/reviews`,
};

export enum PosterSizes {
  XS = 'x45',
  SM = 'w300',
  MD = 'w500',
  XL = 'original',
}
