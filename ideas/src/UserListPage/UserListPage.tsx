import Tag from '../Models/Tag';
import * as React from 'react';
// import './IdeaPage.css';
import { Link } from 'react-router-dom';
import User from '../Models/User';
class State {
  data: User[] | null;
  tags: Tag[] | null;
}
class UserListPage extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);
    this.state = { data: null, tags: null };

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('access-token', localStorage.getItem('access-token') as string);
    headers.append('client', localStorage.getItem('client') as string);
    headers.append('uid', localStorage.getItem('uid') as string);

    fetch('http://' + process.env.REACT_APP_API_HOST + ':3000/users', {
      method: 'get',
      headers: headers
    }).then((r) => r.json())
      .then((r: User[]) => this.setState({ data: r }));

    fetch('http://' + process.env.REACT_APP_API_HOST + ':3000/tags', {
      method: 'get',
      headers: headers
    }).then((r) => r.json())
      .then((r: Tag[]) => this.setState({ tags: r }));
  }

  render() {
    if (!this.state.data || !this.state.tags) {
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
              <span className="glyphicon glyphicon-cog pull-right" />
            </Link>
          </div>
          <br />
          <h1 className="text-center">Ideas</h1>
          <select name="tags" id="tags" multiple={true}>
            {this.state.tags.map((tag) => (
                <option key={tag.id} value={tag.id}>
                  {tag.title}
                </option>
              ))}
          </select>
          <table className="table">
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Ideas</th>
                <th>Solutions</th>
                <th>Comments</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((user) => (
                <tr key={user.id}>
                  <td>{user.email}</td>
                  <td>{user.email}</td>
                  <td>{user.ideas.length}</td>
                  <td>{Math.round(Math.random() * 7)}</td>
                  <td>{user.comments.length}</td>
                  <td><Link to={'/user/' + user.id}>Send message</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default UserListPage;