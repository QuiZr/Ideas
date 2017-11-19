import * as React from 'react';
import './IdeasPage.css';
import { Link } from 'react-router-dom';
import Idea from '../Models/Idea';

class IdeaRow extends React.Component<{ idea: Idea }, {}> {

  render() {
    const idea: Idea = this.props.idea;
    return (
      <div>
        <h2>{idea.title}</h2>
        <div>{idea.desc_short}</div>
        <Link to={'/idea/' + idea.id}>
          Read more...
        </Link>
      </div>
    );
  }
}

export default IdeaRow;