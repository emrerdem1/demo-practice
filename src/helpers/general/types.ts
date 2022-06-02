import { String } from 'ts-toolbelt';

export type TGetCustomQueryPath<T extends string> = String.Split<T, ':'>[1];

export type TGetCustomQueryParams<T extends string> = {
  [key in T]: string;
};
