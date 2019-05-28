import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = props => (
  <div className="app-container" style={{marginBottom:"6em"}}>
    <header>
      <Link to="/">
        <img className="logo" src="./images/logo_transparent.png" alt="Profile Page" />
      </Link>
    </header>
    <div className="app-content">{props.children}</div>
    
  </div>
);

export default Layout;
