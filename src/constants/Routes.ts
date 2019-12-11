import Home from 'components/Home';
import Folder from 'components/Folder';

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
    component: Folder,
    data: {
      title: RouteTitle.Error404,
    },
  },
];

export default Routes;
