import React from 'react';

const User = ({ singleUser }) => {
  return (
    <tr>
      <th scope='row'>{singleUser.id}</th>
      <td>{singleUser.username}</td>
      <td>{singleUser.age}</td>
      <td>{singleUser.salaried ? 'YES': 'NO'}</td>
    </tr>
  );
};

export default User;
