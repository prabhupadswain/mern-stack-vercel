import React from 'react';
import UserList from '../components/UserList';

const DisplayUser = () => {
  return (
    <main>
      <section className='mb-4'>
        <h3>Users Information</h3>
      </section>
      <section className='mb-3'>
        <UserList />
      </section>
    </main>
  );
};

export default DisplayUser;
