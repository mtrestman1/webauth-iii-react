import React from 'react';
import axios from 'axios';

class Signup extends React.Component {
  state = {
    username: '',
    password: '',
    department: ''
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username" />
            <input
            placeholder='username'
              value={this.state.username}
              onChange={this.handleInputChange}
              id="username"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password" />
            <input
            placeholder='password'
              value={this.state.password}
              onChange={this.handleInputChange}
              id="password"
              type="password"
            />
          </div>
          <div>
            <label htmlFor="department" />
            <input
            placeholder='department'
              value={this.state.department}
              onChange={this.handleInputChange}
              id="department"
              type="text"
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
      </>
    );
  }

  handleSubmit = event => {
    event.preventDefault();

    const endpoint = 'http://localhost:5000/api/register';
    axios
      .post(endpoint, this.state)
     
      .then(res => {
        console.log('Signup RESPONSE', res);
        localStorage.setItem('token', res.data.token)
        
      })
      .catch(error => {
        console.error('Signup ERROR', error);
      });
  };

  handleInputChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };
}

export default Signup;