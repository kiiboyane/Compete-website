import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
//import Loadable from 'react-loadable';
import './App.css';
import Login from './views/Login_View';
import Register from './views/Register_View';
import './App.scss';



class App extends Component {

  render() {
    return (
      <HashRouter>
          <Switch>
            <Route exact path="/login" name="Login Page" component={Login} />
            <Route exact path="/register" name="Registration Page" component={Register} />
          </Switch>
      </HashRouter>
    );
  }
}

export default App;


/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Login/>
      </div>
    );
  }
}

export default App;
*/