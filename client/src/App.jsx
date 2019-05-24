

import React, { Component } from 'react';
import { HashRouter,Route, Switch } from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login';
import Register from './components/Register/Register.jsx';
// import { PrivateRoute } from './components/PrivateRoute.js';
import About from './components/About/About.jsx';
import AdminApk from './components/Admin/AdminApk/AdminApk';
import AdminContestList from './components/Admin/AdminContest/AdminContestList';
import AdminUser from './components/Admin/AdminUser/ListUsers';
import Contact from './components/Contact/Contact.jsx';
import ContestView from './components/ContestView/ContestView.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './components/Home/Home.jsx';
import InfoUser from './components/InfoUser/InfoUser.jsx';
import ListContest from './components/ListContest/ListContest';
import NavbarC from './components/NavbarC/NavbarC';
import VoirSoumission from './components/Jury/VoirSoumission/VoirSoumission';
import JuryListSoumission from './components/Jury/ListSoumission/ListSoumission';










class App extends Component {
        render() {
          return (
            <HashRouter>
              <Switch>  
                      <NavbarC />

                      {/* <PrivateRoute path='/dashboard' component={Dashboard} /> */}
                      <Route  path="/" component={Home}/>
                      <Route  path="/login" component={Login}/>
                      <Route  path ="/signup" component={Register}/>
                      <Route  path="/about" component={About}/>
                      <Route  path="/adminApk" component={AdminApk}/>
                      <Route  path="/adminContestList" component={AdminContestList}/>
                      <Route  path="/adminUser" component={AdminUser}/>
                      <Route  path="/contact" component={Contact}/>
                      <Route  path="/contestView" component={ContestView}/>
                      <Route  path="/footer" component={Footer}/>
                      <Route  path="/home" component={Home}/>
                      <Route  path="/infoUser" component={InfoUser}/>
                      <Route  path="/listContest" component={ListContest}/>
                      <Route  path="/juryListSoumission" component={JuryListSoumission}/>
                      <Route  path="/navbarC" component={NavbarC}/>
                      <Route  path="/voirSoumission" component={VoirSoumission}/>

                      <Footer />
                      

                  </Switch>
            </HashRouter>
          )
    }
}
export default App;
