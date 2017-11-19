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
    fetch('http://' + process.env.REACT_APP_API_HOST + ':3000/auth/sign_in', {
      method: 'post',
      headers: headers,
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password
      })
    }).then((r) => {
      localStorage.setItem('access-token', r.headers.get('access-token') as string);
      localStorage.setItem('client', r.headers.get('client') as string);
      localStorage.setItem('uid', r.headers.get('uid') as string);      
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
    }).then(() => this.login);
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
              className="form-control"
              type="text"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
            />
            <input
              className="form-control"
              type="password"
              placeholder="Password"
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
            <button className="btn btn-block btn-default" onClick={this.register}>
              Zarejestruj się
            </button>
            <a className="btn btn-block btn-social btn-facebook">
              <span className="fa fa-facebook" />&nbsp;&nbsp;&nbsp;&nbsp;Kontynuuj z FB
            </a>
            <a className="btn btn-block btn-social btn-google">
              <span className="fa fa-google" />&nbsp;&nbsp;&nbsp;&nbsp;Kontynuuj z Google
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
