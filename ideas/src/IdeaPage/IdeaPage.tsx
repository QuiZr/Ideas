import * as React from 'react';
import './IdeaPage.css';
import { Link } from 'react-router-dom';
import Idea from '../Models/Idea';

class IdeaPage extends React.Component<{}, { data: Idea | null }> {

  constructor(props: {}) {
    super(props);
    this.state = { data: null };
    this.setStorageTagKey = this.setStorageTagKey.bind(this);
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('access-token', localStorage.getItem('access-token') as string);
    headers.append('client', localStorage.getItem('client') as string);
    headers.append('uid', localStorage.getItem('uid') as string);
    fetch('http://' + process.env.REACT_APP_API_HOST + ':3000/ideas/' + (this.props as any).match.params.id, {
      method: 'get',
      headers: headers
    }).then((r) => r.json())
      .then((r: Idea) => this.setState({ data: r }));
  }

  setStorageTagKey(tag: string) {
    localStorage.setItem('tags', tag);
    return true;
  }

  render() {
    // {REMOVE ME}
    setStatusColor();
    if (!this.state.data) {
      return null;
    }

    return (
      <div>
        <div className="container-fluid wrapper">
          <div id="naviBox">
            <Link to="/ideas"><span className="glyphicon glyphicon-home pull-left" /></Link>
            <Link to="/"><span className="glyphicon glyphicon-cog pull-right" /></Link>
          </div>
          <br />
          <div id="ideaBox">
            <h1 className="text-center">{this.state.data.title}</h1>
            <h5 className="text-center">
              {this.state.data.desc_short}
            </h5>
            <div id="statusBox" className="pull-right">
              {this.state.data.status}
            </div>
            <div id="description" className="text-center">
              <p className="text-left">
                {this.state.data.desc_long}
              </p>
            </div>
            <div className="row">
              <h4 className="col-md-4">
                <p>Tags:</p>
                {this.state.data.tags.map((tag) =>
                  <Link to="/ideas" key={tag.id} onClick={() => this.setStorageTagKey(tag.title)}>#{tag.title} </Link>
                )}
              </h4>
            </div>
            <div className="row">
              <h4 className="col-md-4">
                <p>Share:</p>
                <a className="btn btn-social-icon btn-facebook">
                  <span className="fa fa-facebook" />
                </a>
                &nbsp;
                <a className="btn btn-social-icon btn-google">
                  <span className="fa fa-google" />
                </a>
                &nbsp;
                <a className="btn btn-social-icon btn-twitter">
                  <span className="fa fa-twitter" />
                </a>
              </h4>
            </div>
          </div>
          <div id="commentsBox">
            <h3 className="text-left">Comments</h3>
            <ul>
              {this.state.data.comments.map((comment) => (
                <li>
                  <div className="comment">
                    <blockquote>
                      <p>{comment.body}</p>
                      <footer><Link to={'/user/' + comment.user_id}>{comment.user_email}</Link></footer>
                    </blockquote>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div >
    );
  }
}

function setStatusColor() {
  let color = 'blue';
  let box = document.getElementById('description');
  let ribbon = document.getElementById('statusBox');
  if (box == null || ribbon == null) {
    return;
  }

  box.style.borderColor = color;
  ribbon.style.backgroundColor = color;
}

export default IdeaPage;