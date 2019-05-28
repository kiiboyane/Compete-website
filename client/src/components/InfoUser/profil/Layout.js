import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = props => (
  <div className="app-container">
    <header>
      <Link to="/">
        <img className="logo" src="/img/logo_transparent.png" alt="Profile Page" />
      </Link>
    </header>
    <div className="app-content">{props.children}</div>
    <footer>
      <p>
        Copyrights <strong> Hemant Joshi </strong> 2018-2019
      </p>
    </footer>
  </div>
);

export default Layout;