import React from 'react';
import UserForm from '../components/UserForm';

const CreateUser = () => {
  return (
    <main>
      <section className='mb-4'>
        <h3>Create a new user</h3>
      </section>
      <section className='mb-3'>
        <UserForm />
      </section>
    </main>
  );
};

export default CreateUser;
