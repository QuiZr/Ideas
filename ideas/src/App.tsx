import * as React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

import LandingPage from './LandingPage/LandingPage';
import RegisterPage from './RegisterPage/RegisterPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={LandingPage} />
          <Route exact={true} path="/register" component={RegisterPage} />          
        </div>
      </Router>
    );
  }
}

export default App;
