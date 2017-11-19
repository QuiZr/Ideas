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
import UserPage from './UserPage/UserPage';
import AddIdeaPage from './AddIdeaPage/AddIdeaPage';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={LandingPage} />
          <Route exact={false} path="/idea/:id" component={IdeaPage} />          
          <Route exact={true} path="/ideas" component={IdeasPage} />
          <Route exact={true} path="/register" component={RegisterPage} />          
          <Route exact={true} path="/user" component={UserPage} />          
          <Route exact={true} path="/users" component={UserListPage} />          
          <Route exact={true} path="/add" component={AddIdeaPage} />          
        </div>
      </Router>
    );
  }
}

export default App;
