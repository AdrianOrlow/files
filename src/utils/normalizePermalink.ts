import * as R from 'ramda';
import { normalizeString, normalizeUri, toSnakeCase } from './strings';

const normalizePermalink = (fileName: string): string => R.pipe(
  normalizeString,
  normalizeUri,
  toSnakeCase,
)(fileName);

export default normalizePermalink;
