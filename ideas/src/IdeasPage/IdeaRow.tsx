import * as React from 'react';
import './IdeasPage.css';
import { Link } from 'react-router-dom';
import Idea from '../Models/Idea';

class IdeaRow extends React.Component<{ idea: Idea }, {}> {

  render() {
    const idea: Idea = this.props.idea;
    return (
      <div className="record">
        <h3>{idea.title}</h3>
        <p>{idea.desc_short}</p>
        <button className="btn btn-default">
          <Link to={'/idea/' + idea.id}>
            Read more...
        </Link>
        </button>
      </div>
    );
  }
}

export default IdeaRow;