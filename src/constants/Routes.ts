import Home from 'components/Home';
import Folder from 'components/Folder';
import NotFound from 'components/NotFound';

import { RouteTitle, RouteType } from './types';

const Routes: RouteType[] = [
  {
    path: '/',
    component: Home,
    exact: true,
    data: {
      title: RouteTitle.Home,
    },
  },
  {
    path: '/folder/:id',
    component: Folder,
    data: {
      title: RouteTitle.Folder,
    },
  },
  {
    path: '*',
    component: NotFound,
    data: {
      title: RouteTitle.Error404,
    },
  },
];

export default Routes;
