import IdeaHeader from './IdeaHeader';
import * as React from 'react';
import './IdeasPage.css';
import Idea from '../Models/Idea';
import IdeaRow from './IdeaRow';

class IdeasPage extends React.Component<{}, { data: Idea[] | null }> {

  constructor(props: {}) {
    super(props);
    this.state = { data: null };
    this.updateFilters = this.updateFilters.bind(this);
    this.updateFilters(null, null, null);
  }

  updateFilters(search: string | null, tags: string | null, status: string | null) {
    {/* TODO: Add filtering */ }
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('access-token', localStorage.getItem('access-token') as string);
    headers.append('client', localStorage.getItem('client') as string);
    headers.append('uid', localStorage.getItem('uid') as string);
    fetch('http://' + process.env.REACT_APP_API_HOST + ':3000/ideas', {
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
        <IdeaHeader onFiltersChange={this.updateFilters} />
        {ideas}
      </div>
    );
  }
}

export default IdeasPage;