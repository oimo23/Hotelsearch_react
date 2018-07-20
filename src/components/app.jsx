import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import SearchPage from './SearchPage';
import AboutPage from './AboutPage';

const App = () => (
  <Router>
    <div className="app">
      <ul className="left-navi">
        <li><Link to="/react_hotelsearch/">ホテル検索</Link></li>
        <li><Link to="/react_hotelsearch/about">About</Link></li>
      </ul>
      <Switch>
        <Route exact path="/react_hotelsearch/" component={SearchPage} />
        <Route exact path="/react_hotelsearch/about" component={AboutPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
