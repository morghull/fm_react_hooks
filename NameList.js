import React, { useState, useEffect, useMemo } from 'react';
import { getUsers } from '../../api';
import { useData } from '../../hooks';

const NameList = (props) => {
  const { data: users, error, isFetching } = useData(getUsers);

  if (error) {
    return <p>{error.message}</p>;
  }
  if (isFetching) {
    return <p>Loading...</p>;
  }

  return (
    <ol>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ol>
  );
};

export default NameList;
