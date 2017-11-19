import User from '../Models/User';
import * as React from 'react';
import './UserPage.css';
import { Link } from 'react-router-dom';

class State {
  data: User | null;
}

class UserPage extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);

    this.logout = this.logout.bind(this);
    this.randomInt = this.randomInt.bind(this);
    this.asdf = this.asdf.bind(this);

    this.state = { data: null };

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('access-token', localStorage.getItem('access-token') as string);
    headers.append('client', localStorage.getItem('client') as string);
    headers.append('uid', localStorage.getItem('uid') as string);
    fetch('http://' + process.env.REACT_APP_API_HOST + ':3000/users?address=' + (this.props as any).match.params.id, {
      method: 'get',
      headers: headers
    }).then((r) => r.json())
      .then((r) => this.setState({ data: r[0] }));
  }

  logout() {
    console.log('logout');
  }

  randomInt() {
    return Math.round(Math.random() * 7);
  }

  asdf() {
    if (!this.state.data) {
      return;
    }
    let ideas = this.state.data.ideas;
    let b = [];

    for (let f of ideas) {
      if (ideas.indexOf(f) < ideas.length - 2) {
        b.push(
          <div className="row text-center">
            <Link to={'/idea/' + f.id}>
              <div className="col-md-6">
                <button className="btn btn-default ideaLink">
                  Solution <br />
                  <b>{f.title}</b>
                </button>
              </div>
            </Link>
            <div className="col-md-6">
            <Link to={'/idea/' + ideas[ideas.indexOf(f) + 1].id}>
              <button className="btn btn-default ideaLink">
                Solution <br />
                <b>{ideas[ideas.indexOf(f) + 1].title}</b>
              </button>
            </Link>                          
            </div>
          </div>
        );
      }
    }
    return b;
  }

  render() {
    if (!this.state.data) {
      return null;
    }
    return (
      <div>
        <div className="container-fluid wrapper">
          <div id="naviBox">
            <Link to="/ideas">
              <span className="glyphicon glyphicon-home pull-left" />
            </Link>
            <Link to="/">
              <span onClick={this.logout} className="glyphicon glyphicon-off pull-right" />
            </Link>
          </div>
          <br />
          <h1 className="text-center">Ideas</h1>
          <div className="row">
            <div id="info" className="col-md-4">
              <div id="avatar" className="text-center">
                <img
                  src={'https://api.adorable.io/avatars/180/' + this.state.data.uid}
                  alt="X"
                  width="141"
                  height="171"
                />
              </div>
              <div className="text-center">
                <h4>{this.state.data.email}</h4>
              </div>
              <ul className="bioList">
                <li>Ideas: <span className="pull-right">{this.state.data.ideas.length}</span> </li>
                <li>Solutions: <span className="pull-right">{this.randomInt()}</span> </li>
                <li>Comments: <span className="pull-right">{this.state.data.comments.length}</span> </li>
              </ul>
              <hr />
              <div id="bio">
                Sed posuere eros neque, sed blandit sem malesuada ac. Cras a sem venenatis, dapibus dui eu, rhoncus tortor. Fusce at odio vitae mi interdum ornare. Praesent imperdiet feugiat nunc, et tincidunt lectus interdum et.
							</div>
            </div>
            <div id="activity" className="col-md-8" >
              {this.asdf()}
              <hr />
              <div>
                <h4>Ostatnia aktywność</h4>
                {this.state.data.comments.map((comment) => (
                  <Link to={'/idea/' + comment.idea_id}>
                    <div className="text-center">
                      <button className="btn btn-default activityLink">
                        <span className="pull-left">
                          Commented on <b>{comment.created_at}</b>
                        </span>
                        <br />
                        <span className="pull-left"><i>{comment.body + Array(200).join(' ')}</i></span>
                      </button>
                    </div>
                  </Link>)
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;