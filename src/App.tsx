import React from 'react';
import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
      </Switch>
    </Router>
  );
}

export default App;
