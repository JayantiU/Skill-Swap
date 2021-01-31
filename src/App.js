import './App.css';
import RegisterPage from './components/RegisterPage/RegisterPage'
import LoginPage from './components/LoginPage/LoginPage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScreenCaptureComponent from './components/ScreenCaptureComponent.js/ScreenCaptureComponent';


function App() {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={LoginPage}/>
            <Route path="/register" component={RegisterPage}/>
            <Route path="/scapture" component={ScreenCaptureComponent}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
