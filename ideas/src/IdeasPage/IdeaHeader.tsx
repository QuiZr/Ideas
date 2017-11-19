import * as React from 'react';
import './IdeasPage.css';

class State {
  search: string;
  tags: string;
  status: string;
}

class Props {
  onFiltersChange: (search: string, tags: string, status: string) => void;
}

class IdeaHeader extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      search: '',
      tags: '',
      status: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: /* tslint:disable */ any /* tslint:enable */) {
    this.setState(
      { [event.target.name]: event.target.value },
      () => (this.props.onFiltersChange(this.state.search, this.state.tags, this.state.status)));
  }

  render() {
    return (
      <div>
        <select name="status" id="status" onChange={this.handleChange} value={this.state.status} >
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
          value={this.state.search}
          name="search"
        />
        <input
          className="form-control"
          type="text"
          placeholder="Tags"
          onChange={this.handleChange}
          value={this.state.tags}
          name="tags"
        />
      </div>
    );
  }
}

export default IdeaHeader;