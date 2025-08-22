import React, { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function UserDashboard() {
  const { user } = useContext(UserContext);

  return (
    console.log(user),
    <div className='mt-16'>
        <h1>Dashboard</h1>
        <h1 className='mt-5'>Welcome {user ? user.fullName || user.username : "Guest"}</h1>
    </div>
  );
}
