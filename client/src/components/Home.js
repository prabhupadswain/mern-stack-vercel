import React, { Fragment } from 'react';

const Home = () => {
  return (
    <section>
      <h2 className='display-6'>
        Welcome to User Database Management System software !!!
      </h2>
      <p className='lead'>
        Use below buttons to navigate to either create a new user or display
        list of users present in our database.
      </p>
      <div className='row'>
        <div className='col-6'>
          <a href='#' className='btn btn-primary w-50'>
            Click here to create a new user
          </a>
        </div>
        <div className='col-6'>
          <a href='#' className='btn btn-primary w-50'>
            Click here to display list of all users
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
