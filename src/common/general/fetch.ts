const _INITIAL_FETCH_STATE: IFetchSpec = {
  isLoading: true,
  isSuccess: null,
  isFailure: null,
};

const _SUCCESS_FETCH_STATE: IFetchSpec = {
  isSuccess: true,
  isLoading: false,
  isFailure: false,
};

const _FAILURE_FETCH_STATE: IFetchSpec = {
  isFailure: true,
  isLoading: false,
  isSuccess: false,
};

export interface IFetchSpec {
  isLoading: boolean;
  isSuccess: boolean | null;
  isFailure: boolean | null;
}

export enum FetchKeys {
  INITIAL,
  SUCCESS,
  FAILURE,
}

export const FETCH_STATES: Record<FetchKeys, IFetchSpec> = {
  [FetchKeys.INITIAL]: _INITIAL_FETCH_STATE,
  [FetchKeys.SUCCESS]: _SUCCESS_FETCH_STATE,
  [FetchKeys.FAILURE]: _FAILURE_FETCH_STATE,
};
