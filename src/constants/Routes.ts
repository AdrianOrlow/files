import Home from 'components/Home';
import Folder from 'components/Folder';
import File from 'components/File';
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
    path: '/file/:id',
    component: File,
    data: {
      title: RouteTitle.File,
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
