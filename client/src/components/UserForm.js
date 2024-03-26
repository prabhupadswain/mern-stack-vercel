import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user/UserState';

const UserForm = () => {
  const [user, setUser] = useState({
    username: '',
    age: 0,
    salaried: undefined,
  });

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const { addUser } = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const { username, age, salaried } = user;

    const newUser = {
      username,
      age: +age,
      salaried: salaried === 'yes' ? true : false,
    };

    addUser(newUser);

    setUser({
      username: '',
      age: 0,
      salaried: undefined,
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='row mb-3'>
        <label className='col-sm-2 col-form-label'>Username: </label>
        <div className='col-sm-10'>
          <input
            type='text'
            placeholder='Enter username'
            value={user.username}
            className='form-control'
            name='username'
            onChange={changeHandler}
          />
        </div>
      </div>
      <div className='row mb-3'>
        <label className='col-sm-2 col-form-label'>Age: </label>
        <div className='col-sm-10'>
          <input
            type='number'
            placeholder='Enter user age in number only'
            value={user.age}
            className='form-control'
            name='age'
            onChange={changeHandler}
          />
        </div>
      </div>
      <fieldset className='row mb-3'>
        <legend className='col-form-label col-sm-2 pt-0'>
          Are you salaried?
        </legend>
        <div className='col-sm-10'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='salaried'
              value='yes'
              checked={user.salaried === 'yes'}
              onChange={changeHandler}
            />
            <label className='form-check-label'>Yes</label>
          </div>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='radio'
              name='salaried'
              value='no'
              checked={user.salaried === 'no'}
              onChange={changeHandler}
            />
            <label className='form-check-label'>No</label>
          </div>
        </div>
      </fieldset>
      <div className='row mb-3'>
        <div className='col-sm-4'>
          <button type='submit' className='btn btn-success'>
            Add a new user to database
          </button>
        </div>
      </div>
    </form>
  );
};

export default UserForm;
