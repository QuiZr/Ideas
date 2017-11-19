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
import UserListPage from './UserListPage/UserListPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={LandingPage} />
          <Route exact={false} path="/idea/:id" component={IdeaPage} />          
          <Route exact={true} path="/ideas" component={IdeasPage} />
          <Route exact={true} path="/register" component={RegisterPage} />          
          <Route exact={true} path="/users" component={UserListPage} />          
        </div>
      </Router>
    );
  }
}

export default App;
