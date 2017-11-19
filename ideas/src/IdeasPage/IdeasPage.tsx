import IdeaHeader from './IdeaHeader';
import * as React from 'react';
import './IdeasPage.css';
import Idea from '../Models/Idea';
import IdeaRow from './IdeaRow';

class State {
  search: string;
  tags: string;
  status: string;
}

class IdeasPage extends React.Component<{}, State & { data: Idea[] | null }> {

  constructor(props: {}) {
    super(props);
    this.state = {
      data: null,
      search: '',
      tags: '',
      status: ''
    };
    this.updateFilters = this.updateFilters.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.updateFilters();
  }
  handleChange(event: /* tslint:disable */ any /* tslint:enable */) {
    this.setState({ [event.target.name]: event.target.value }, () => this.updateFilters());
  }

  updateFilters() {
    let search = this.state.search;
    let tags = this.state.tags;
    let status = this.state.status;
    let filtering = '';

    if (localStorage.getItem('search')) {
      filtering += 'title=' + localStorage.getItem('search') + '&';
      localStorage.removeItem('search');
    } else if (search) {
      filtering += 'title=' + search + '&';
    }
    if (localStorage.getItem('tags')) {
      filtering += 'tag=' + localStorage.getItem('tags') + '&';
      this.setState({ tags: localStorage.getItem('tags') as string }, () => localStorage.removeItem('tags'));
    } else if (tags) {
      filtering += 'tag=' + tags + '&';
    }
    if (localStorage.getItem('status')) {
      filtering += 'status=' + localStorage.getItem('status') + '&';
      localStorage.removeItem('status');
    } else if (status) {
      filtering += 'status=' + status;
    }
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('access-token', localStorage.getItem('access-token') as string);
    headers.append('client', localStorage.getItem('client') as string);
    headers.append('uid', localStorage.getItem('uid') as string);
    fetch('http://' + process.env.REACT_APP_API_HOST + ':3000/ideas?' + filtering, {
      method: 'get',
      headers: headers
    }).then((r) => r.json())
      .then((r: Idea[]) => this.setState({ data: r }));
  }

  render() {
    let ideas: JSX.Element[] | null = null;
    if (this.state.data != null) {
      ideas = this.state.data.map((idea) =>
        <IdeaRow idea={idea} key={idea.id} />
      );
    }

    return (
      <div>
        <IdeaHeader
          handleChange={this.handleChange}
          search={this.state.search}
          status={this.state.status}
          tags={this.state.tags}
        />
        <div className="container-fluid wrapper">
          {ideas}
        </div>
      </div>
    );
  }
}

export default IdeasPage;