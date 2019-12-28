import * as R from 'ramda';
import { normalizeString, toSnakeCase } from 'utils/index';

export const fileNameWithoutExtension = (fileName: string): string => R.pipe(
  R.split('.'),
  R.slice(0, -1),
  R.join('.'),
)(fileName);

export const normalizeFileName = (fileName: string): string => R.pipe(
  normalizeString,
  toSnakeCase,
)(fileName);
