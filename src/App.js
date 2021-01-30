import RegisterPage from "./Views/RegisterPage";
import LoginPage from "./Views/LoginPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/"></Route>
          <LoginPage />
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
