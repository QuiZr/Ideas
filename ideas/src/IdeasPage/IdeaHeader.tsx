import * as React from 'react';
import './IdeasPage.css';

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
    return (
      <div>
        <select name="status" id="status" onChange={this.handleChange} value={this.props.status} >
          <option value="idea">Idea</option>
          <option value="problem">Problem</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
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