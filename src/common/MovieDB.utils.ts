import { API_KEY, MOVIE_DB_BASE_URL } from './MovieDB.constants';

interface IApiCallProps {
  requestEndpoint: string;
}
interface IApiProps {
  endpoint: string;
}

export const generateApiURL = ({ endpoint }: IApiProps): string => {
  return `${MOVIE_DB_BASE_URL}${endpoint}?api_key=${API_KEY}`;
};

export const movieDBApiCall = async ({ requestEndpoint }: IApiCallProps) => {
  const movieResponse = await fetch(requestEndpoint);
  const movieResult = await movieResponse.json();
  return movieResult;
};

export const getMovieList = async (endpoint: string) =>
  await movieDBApiCall({
    requestEndpoint: generateApiURL({ endpoint }),
  });

export const getMovieDetailApiURL = (id: number, detailPath: string) => {
  const parsedEndpoint = detailPath.replace('{movie_id}', id.toString());
  return generateApiURL({ endpoint: parsedEndpoint });
};
