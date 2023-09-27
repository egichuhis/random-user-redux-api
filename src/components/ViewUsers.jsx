import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/features/users/userSlice';

const ViewUsers = () => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h1>Hello, World</h1>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users.length ? (
        <ul>
          {
            user.users.map((user, index) =>
              <li key={index}>
                {user.name.title}{'. '}
                {user.name.first}{' '}
                {user.name.last}{' '}             
              </li>)
          }
        </ul>
      ) : null}
    </div>
  )
};

export default ViewUsers;
