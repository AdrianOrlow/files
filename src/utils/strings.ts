import * as R from 'ramda';

export const normalizeString = (string: string): string => R.pipe(
  (str: string): string => str.normalize('NFD'),
  R.replace(/[\u0300-\u036f]/g, ''),
)(string);

export const normalizeUri = (string: string): string => R.pipe(
  R.replace(/^-*|-*$/g, ''),
  R.replace(/[ł]/g, 'l'),
  R.replace(/[$&+,:;=?@#|'<>.^*()%!-]/g, ''),
)(string);

export const toSnakeCase = (string: string): string => R.pipe(
  R.replace(/\s+/g, '-'),
  R.toLower,
)(string);
