import Home from 'components/Home';
import Login from 'components/Login';
import NewFile from 'components/NewFile';
import NewFolder from 'components/NewFolder';
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
    path: '/login',
    component: Login,
    exact: true,
    data: {
      title: RouteTitle.Login,
    },
  },
  {
    path: '/newfile/:folderId?',
    component: NewFile,
    exact: true,
    data: {
      title: RouteTitle.NewFile,
    },
  },
  {
    path: '/newfolder/:parentId?',
    component: NewFolder,
    exact: true,
    data: {
      title: RouteTitle.NewFolder,
    },
  },
  {
    path: '/folder/:id/:permalink?',
    component: Folder,
    data: {
      title: RouteTitle.Folder,
    },
  },
  {
    path: '/file/:id/:permalink?',
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
