import React from 'react';
import Dashboard from './components/dashboard/Dashboard';
import Video from './components/video/Video';
import RegisterPage from "./components/RegisterPage/RegisterPage";
import LoginPage from "./components/LoginPage/LoginPage";
import ConferencePage from "./components/ConferencePage/ConferencePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/video"  component={Video} />
          <Route path="/" exact component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/conference" component={ConferencePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;