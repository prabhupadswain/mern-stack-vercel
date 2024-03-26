import React, { Fragment, useContext } from 'react';
import { UserContext } from '../context/user/UserState';
import User from './User';

const UserList = () => {
  const { users } = useContext(UserContext);
  console.log(users);

  return (
    <Fragment>
      <table className='table table-danger'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>User Name</th>
            <th scope='col'>Age</th>
            <th scope='col'>Job</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User key={user.id} singleUser={user} />
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default UserList;
