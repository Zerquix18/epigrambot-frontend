import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './pages';
import TOS from './pages/TOS';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router >
      <div className="App">
        <Switch>
          <Route path="/tos" component={TOS} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
