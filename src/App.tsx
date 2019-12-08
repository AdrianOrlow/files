import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Header from 'components/Header';
import Home from 'components/Home';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          {/*<Route exact path="/upload" component={Upload} />
          <Route path="/folder/:id" component={Folder} />
          <Route path="/file/:id" component={File} />
          <Route path="*" component={NotFound} />*/}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
