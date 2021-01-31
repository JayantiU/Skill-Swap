import React from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Video from './components/video/Video';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/video"  component={Video} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;