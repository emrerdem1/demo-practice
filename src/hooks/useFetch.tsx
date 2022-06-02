import { FetchKeys, FETCH_STATES, IFetchSpec } from 'helpers/general/fetch';
import { useEffect, useRef, useState } from 'react';

interface IUseFetchSpec<T> extends IFetchSpec {
  data: T | null;
}

const useFetch = <T = unknown,>(
  fetchCallback: () => Promise<T>
): IUseFetchSpec<T> => {
  const isUnmounted = useRef<boolean>(false);
  const [{ data, isLoading, isSuccess, isFailure }, setFetchResult] = useState<
    IUseFetchSpec<T>
  >({
    ...FETCH_STATES[FetchKeys.INITIAL],
    data: null,
  });

  useEffect(() => {
    fetchCallback()
      .then((response) => {
        if (isUnmounted.current) return;

        setFetchResult((prevState) => ({
          ...prevState,
          ...FETCH_STATES[FetchKeys.SUCCESS],
          data: response,
        }));
      })
      .catch((error) => {
        if (isUnmounted.current) return;

        console.warn(error);
        setFetchResult((prevState) => ({
          ...prevState,
          ...FETCH_STATES[FetchKeys.FAILURE],
        }));
      });

    return () => {
      isUnmounted.current = true;
    };
  }, []);

  return { data, isLoading, isSuccess, isFailure };
};

export default useFetch;
