import * as React from 'react';
import './AddIdeaPage.css';
import { Link } from 'react-router-dom';

class AddIdeaPage extends React.Component {
  render() {
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
          <h1 className="text-center">New Idea</h1>

          <form>
            <div className="form-group">
              <label>Title:</label>
              <input className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label>Short description:</label>
              <textarea className="form-control" rows={2} id="comment"></textarea>
            </div>
            <div className="form-group">
              <label>Details:</label>
              <textarea className="form-control" rows={5} id="comment"></textarea>
            </div>
            <div className="btn-group btn-block">
              <button id="idea" onClick={toggle2} className="btn btn-default">Idea</button>
              <button id="problem" onClick={toggle2} className="btn btn-primary active">Problem</button>
            </div>
            <br /><br />
            <button type="submit" className="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function toggle2() {
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

export default AddIdeaPage;