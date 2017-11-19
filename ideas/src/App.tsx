import * as React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './App.css';

import LandingPage from './LandingPage/LandingPage';
import RegisterPage from './RegisterPage/RegisterPage';
import IdeaPage from './IdeaPage/IdeaPage';
import IdeasPage from './IdeasPage/IdeasPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={LandingPage} />
          <Route exact={true} path="/idea" component={IdeaPage} />          
          <Route exact={true} path="/ideas" component={IdeasPage} />
          <Route exact={true} path="/register" component={RegisterPage} />          
        </div>
      </Router>
    );
  }
}

export default App;
