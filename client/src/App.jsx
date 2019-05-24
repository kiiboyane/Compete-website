
export default App;
import React, { Component } from 'react';
import { HashRouter,Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { Login } from './components/Login/Login.js';
import { Signup } from './components/Register/Register.jsx/index.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import './App.css';

class App extends Component {
        render() {
          return (
            <HashRouter>
              <Switch>  
                      <Route exact path="/" component={Login}/>
                      <Route exact path ="/signup" component={Signup}/>
                      <PrivateRoute path='/dashboard' component={Dashboard} />
                  </Switch>
            </HashRouter>
          )
    }
}
export default App;

