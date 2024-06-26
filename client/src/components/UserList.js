import React, { Fragment, useContext, useEffect } from 'react';
import { UserContext } from '../context/user/UserState';
import User from './User';

const UserList = () => {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <table className='table table-danger table-striped'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>User Name</th>
            <th scope='col'>Age</th>
            <th scope='col'>Job</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <User key={index + 1} id={index + 1} singleUser={user} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default UserList;
