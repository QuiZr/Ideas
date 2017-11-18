import * as React from 'react';
import './LandingPage.css';

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
          <button onClick={submit} className="btn btn-block btn-primary">Start</button>
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
  if (idea.classList.contains('btn-default')) {
    idea.classList.add('btn-primary');
    idea.classList.add('active');
    idea.classList.remove('btn-default');
    problem.classList.remove('btn-primary');
    problem.classList.remove('active');
    problem.classList.add('btn-default');
  } else {
    problem.classList.add('btn-primary');
    problem.classList.add('active');
    problem.classList.remove('btn-default');
    idea.classList.remove('btn-primary');
    idea.classList.remove('active');
    idea.classList.add('btn-default');
  }
}

function submit() {
  let title = document.getElementById('title') as HTMLInputElement;
  let problem = document.getElementById('problem');
  if (title == null || problem == null) {
    return;
  }
  alert('leco dane leco: ' + title.value + ' ' + problem.classList.contains('active'));
}

export default LandingPage;