import React from "react";
import { Link } from "react-router-dom";
import {Image} from 'react-bootstrap'

export const UserCard = props => (
  <Link to={`/user/${props.id}`}>
    <div className="user-preview">
      <Image src={`${props.img}`} alt={`${props.name}'s profile`} width="200" rounded/>
      <h2 className="name">{props.name}</h2>
    </div>
  </Link>
);

export default UserCard;
