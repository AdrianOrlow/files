import React from 'react';
import {
  BrowserRouter as Router,
  Switch as RouterSwitch,
  Route as RouterRoute,
} from 'react-router-dom';
import * as R from 'ramda';

import Header from 'components/Header';
import Routes from 'constants/Routes';
import { RouteType } from 'constants/types';

const App: React.FC = () => (
  <Router>
    <div>
      <Header />
      <Switch />
    </div>
  </Router>
);

const Switch: React.FC = () => {
  const routerRoute = (route: RouteType): React.ReactElement => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <RouterRoute key={route.path} {...route} />
  );
  const routes = R.map(routerRoute, Routes);

  return (
    <RouterSwitch>
      {routes}
    </RouterSwitch>
  );
};

export default App;
