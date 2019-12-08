import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from 'components/Header';
import Home from 'components/Home';
import Folder from 'components/Folder';

const App: React.FC = () => (
  <Router>
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/folder/:id" component={Folder} />
        {/*<Route exact path="/upload" component={Upload} />
         <Route path="/file/:id" component={File} />
         <Route path="*" component={NotFound} />*/}
      </Switch>
    </div>
  </Router>
);

export default App;
