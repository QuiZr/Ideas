import * as React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
  render() {
    return (
      <div className="container-fluid vertical-center">
        <div style={{ margin: 'auto' }}>
          <h1 className="text-center">IDEAS</h1>
          <textarea
            className="form-control"
            id="title"
            rows={3}
            cols={30}
            style={{ overflow: 'hidden' }}
            placeholder="Co chciałyś dziś zmienić?"
          />
          <br />
          <div className="btn-group btn-block btn-toggle">
            <button id="idea" onClick={toggle} className="btn btn-default">Pomysł</button>
            <button id="problem" onClick={toggle} className="btn btn-primary active">Problem</button>
          </div>
          <br />
          <br />
          <button onClick={submit} className="btn btn-block btn-primary">Starts</button>
          <br />
          <div className="pull-left"><Link to="/register">Register</Link></div>
          <div className="pull-right"><Link to="/login">Login</Link></div>
        </div>
        <div id="loaderModal" style={{ display: 'none' }}>
          <div className="loader" style={{ margin: 'auto' }}/>
        </div>
      </div>
    );
  }
}

function toggle() {
  let idea = document.getElementById('idea');
  let problem = document.getElementById('problem');
  if (idea == null || problem == null) {
    return;
  }
  idea.classList.toggle('btn-primary');
  idea.classList.toggle('active');
  idea.classList.toggle('btn-default');
  problem.classList.toggle('btn-primary');
  problem.classList.toggle('active');
  problem.classList.toggle('btn-default');
}

function submit() {
  let title = document.getElementById('title') as HTMLInputElement;
  let problem = document.getElementById('problem');
  let loader = document.getElementById('loaderModal');
  if (title == null || problem == null || loader == null) {
    return;
  }
  loader.style.display = 'flex';
  // alert('leco dane leco: ' + title.value + ' ' + problem.classList.contains('active'));
}

export default LandingPage;