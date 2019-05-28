import React from 'react';
import { UserCard } from './UserCard';

export const Index = ({ users }) => (
  <div className="home">
    <div className="users-selector">
      {users.map(
        user => <UserCard key={user.id} {...user} />,
      )}
    </div>
  </div>
);

export default Index;
