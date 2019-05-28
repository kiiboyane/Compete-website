import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

const shortName = (fullname) => {
  const [name, surname] = fullname.split(' ');
  return `${name[0]}. ${surname}`;
};

const UserMenuLink = ({ id, to, label }) => (
  <Route path={`/user/${id}`}>
    {({ match }) => (
      <Link to={to} className={match ? 'active' : ''}>{label}</Link>
    )}
  </Route>
);

export const UserMenu = ({ users }) => (
  <nav className="users-menu">
    {
      users.map(user => 
        <UserMenuLink key={user.id} id={user.id} to={`/user/${user.id}`} label={shortName(user.name)} />
      )
    }
  </nav>
);

export default UserMenu;