import * as React from 'react';
import './IdeasPage.css';
import { Link } from 'react-router-dom';

class Props {
  handleChange: (event: /* tslint:disable */ any /* tslint:enable */) => void;
  search: string;
  tags: string;
  status: string;
}

class IdeaHeader extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: /* tslint:disable */ any /* tslint:enable */) {
    this.props.handleChange(event);
  }

  render() {
    console.log(this.state);
    return (
      <div className="container-fluid wrapper">

        <div id="naviBox">
          <Link to="/"><span className="glyphicon glyphicon-plus pull-left" /></Link>
          <Link to="/"><span className="glyphicon glyphicon-cog pull-right" /></Link>
        </div>
        <br />
        <h1 className="text-center">Ideas</h1>
        <select multiple className="text-center" size={1} name="status" id="status" onChange={this.handleChange} value={this.props.status} >
          <option className="btn btn-success" value="idea">Idea</option>
          <option className="btn btn-success" value="problem">Problem</option>
          <option className="btn btn-success" value="doing">Doing</option>
          <option className="btn btn-success" value="done">Done</option>
        </select>
        <input
          className="form-control"
          type="text"
          placeholder="Search"
          onChange={this.handleChange}
          value={this.props.search}
          name="search"
        />
        <input
          className="form-control"
          type="text"
          placeholder="Tags"
          onChange={this.handleChange}
          value={this.props.tags}
          name="tags"
        />
      </div>
    );
  }
}

export default IdeaHeader;