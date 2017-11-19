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
      .then((r: User[]) => this.setState({ data: r }, () => console.log(this.state)));

    fetch('http://' + process.env.REACT_APP_API_HOST + ':3000/tags', {
      method: 'get',
      headers: headers
    }).then((r) => r.json())
      .then((r: Tag[]) => this.setState({ tags: r }, () => console.log(this.state)));
  }

  render() {
    if (!this.state.data || !this.state.tags) {
      return null;
    }
    return (
      <div>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag.id}>
              <Link to={'/ideas'} onClick={() => localStorage.setItem('tags', tag.title)}>
                #{tag.title}
              </Link>
            </li>
          ))}
        </ul>
        <ul>
          {this.state.data.map((user) => (
            <li key={user.id}>
              <Link to={'/user/' + user.id}>
                {user.email}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default UserListPage;