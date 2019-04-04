import React from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Users from './components/Users';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
        <NavLink to="/">Home</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/signup">Signup</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/users">Users</NavLink>
          &nbsp;|&nbsp;
          <button onClick={this.logout}>Logout</button>
        </header>
        <main>
          <Route exact path='/' component={Home} /> 
          <Route path='/signup' component={Signup} /> 
          <Route path='/login' component={Login} /> 
          <Route path='/users' component={Users} /> 
        </main>
      </div>
    );
  }
}

function Home(props) {
  return <h1>Home Component</h1>;
}

export default App;
