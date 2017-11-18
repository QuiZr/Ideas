import * as React from 'react';
class RegisterPage extends React.Component<{}, { email: string; password: string }> {
  constructor(props: {}) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  login() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    fetch('http://' + process.env.REACT_APP_API_HOST + ':3000/auth/', {
      method: 'post',
      headers: headers,
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password
      })
    }).then(() => window.location.href = '/');
  }

  register() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    fetch('http://' + process.env.REACT_APP_API_HOST + ':3000/auth/', {
      method: 'post',
      headers: headers,
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password
      })
    }).then(() => window.location.href = '/');
  }

  handleChange(event: /* tslint:disable */ any /* tslint:enable */) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div className="container-fluid vertical-center">
        <div style={{ margin: 'auto' }}>
          <div>
            <input
              type="text"
              placeholder="email"
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
            />
            <br />
            <input
              type="password"
              placeholder="password"
              onChange={this.handleChange}
              value={this.state.password}
              name="password"
            />
          </div>
          <br />
          <div style={{ margin: 'auto' }} className="text-center">
            <button className="btn btn-block btn-success" onClick={this.login}>
              Zaloguj się
            </button>
            <button className="btn btn-block btn-error" onClick={this.register}>
              Zarejestruj się
            </button>
            <button className="btn btn-block btn-primary">
              Kontynuuj przez FB
            </button>
            <button className="btn btn-block btn-warning">
              Kontynuuj przez Google
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
