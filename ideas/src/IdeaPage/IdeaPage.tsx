import * as React from 'react';
import './IdeaPage.css';
import { Link } from 'react-router-dom';
import Idea from '../Models/Idea';

class IdeaPage extends React.Component<{}, { data: Idea | null, comment: string }> {

  constructor(props: {}) {
    super(props);
    this.state = { data: null, comment: "" };
    this.setStorageTagKey = this.setStorageTagKey.bind(this);
    this.like = this.like.bind(this);
    this.refresh = this.refresh.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.refresh();
  }

  refresh() {
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
      .then((r: Idea) => this.setState({ data: r }, () => this.setStatusColor()));
  }

  setStorageTagKey(tag: string) {
    localStorage.setItem('tags', tag);
    return true;
  }

  like() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('access-token', localStorage.getItem('access-token') as string);
    headers.append('client', localStorage.getItem('client') as string);
    headers.append('uid', localStorage.getItem('uid') as string);
    fetch('http://' + process.env.REACT_APP_API_HOST + ':3000/ideas/' + (this.props as any).match.params.id + '/like', {
      method: 'post',
      headers: headers
    }).then(() => this.refresh());
  }


  handleChange(event: /* tslint:disable */ any /* tslint:enable */) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addComment() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('access-token', localStorage.getItem('access-token') as string);
    headers.append('client', localStorage.getItem('client') as string);
    headers.append('uid', localStorage.getItem('uid') as string);
    console.log(this.state)
    fetch('http://' + process.env.REACT_APP_API_HOST + ':3000/ideas/' + (this.props as any).match.params.id + '/comments', {
      method: 'post',
      headers: headers,
      body: JSON.stringify({
        body: this.state.comment,
        idea_id: (this.props as any).match.params.id
      })
    }).then(() => this.refresh());
  }

  render() {
    this.setStatusColor();
    if (!this.state.data) {
      return null;
    }
    return (
      <div>
        <div className="container-fluid wrapper">
          <div id="naviBox">
            <Link to="/ideas"><span className="glyphicon glyphicon-home pull-left" /></Link>
            <Link to={'/user/' + localStorage.getItem('uid')}>
              <span className="glyphicon glyphicon-cog pull-right" />
            </Link>
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
            <div id="likeButton" className="pull-right" onClick={this.like}>
              <span className="glyphicon glyphicon-thumbs-up" style={{ fontSize: '2em' }} />
              {this.state.data.likes}
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
                      <footer><Link to={'/user/' + comment.user_email}>{comment.user_email}</Link></footer>
                    </blockquote>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div id="addComentBox" className="col md-12">
              <div className="form-group">
                <label>Your comment:</label>
                <textarea className="form-control" onChange={this.handleChange} id="comment" name="comment"></textarea>
              </div>
              <br/>
              <button onClick={this.addComment} className="btn btn-success btn-block">Submit</button>
          </div>
        </div>
      </div >
    );
  }

  setStatusColor() {
    if (!this.state.data) {
      return;
    }
    let color = 'blue';
    switch (this.state.data.status) {
      case 'idea':
        color = 'yellow';
        break;
      case 'problem':
        color = 'red';
        break;
      case 'doing':
        color = 'pink';
        break;
      case 'done':
        color = 'green';
        break;
      default:
        color = 'black';
        break;
    }

    let box = document.getElementById('description');
    let ribbon = document.getElementById('statusBox');
    let like = document.getElementById('likeButton');
    if (box == null || ribbon == null || like == null) {
      return;
    }

    box.style.borderColor = color;
    like.style.backgroundColor = color;
    ribbon.style.backgroundColor = color;
  }
}

export default IdeaPage;