import React from "react";
import { Link } from "react-router-dom";

export const UserCard = props => (
  <Link to={`/user/${props.id}`}>
    <div className="user-preview">
      <img src={`${props.img}`} alt={`${props.name}'s profile`} />
      <h2 className="name">{props.name}</h2>
    </div>
  </Link>
);

export default UserCard;