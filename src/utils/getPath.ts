import * as R from 'ramda';
import { generatePath } from 'react-router-dom';

import { Routes, RouteType, RouteTitle } from 'constants/index';

const getRoute = (routeTitle: RouteTitle): RouteType | undefined => R.find<RouteType>(
  (r: RouteType) => R.equals(r.data.title, routeTitle),
  Routes,
);

const getPath = (
  params: { [paramName: string]: string | number | boolean | undefined },
  routeTitle: RouteTitle,
): string => {
  const foundRoute = getRoute(routeTitle);
  return foundRoute ? generatePath(foundRoute.path, params) : '';
};

export default getPath;
