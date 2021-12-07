import React, { useContext } from 'react';
import { UserContext } from './contexts';
import { ThemeContext } from './contexts';

const UserProfile = () => {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <div className={`${theme}__profileWrapper`}>
      <h3>User Profile</h3>
      <p>{user.name}</p>
    </div>
  );
};
