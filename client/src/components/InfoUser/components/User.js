import React from "react";
import { Link } from "react-router-dom";
import { UserMenu } from "./UserMenu";

export const User = ({ user, users }) => {
  const header = { backgroundImage: `url(${user.cover})` }
  return (
    <div className = "user-full">
      <UserMenu users = { users } />
      <div className = "user">
        <header style = {header} />
        <div className = "picture-container">
          <img alt={`${user.name}'s profile`} src={`${user.img}`} />
          <h2 className="name">{user.name}</h2>
        </div>
        <section className = "description">
          NBA is a premium sports tournament with a rank of 3rd worldwide according to money involved
        </section>
        <section className = "medals">
          <p> Address: <strong> { user.address } </strong> </p>
          <p> Phone Number: <strong> { user.phone_number } </strong> </p>
        </section>
      </div>
      <div className = "navigateBack">
        <Link to = "/"> Back to users </Link>
      </div>
    </div>
  )
}

export default User;
