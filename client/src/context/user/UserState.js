import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';
import axios from 'axios';

// Initial State
const initialState = {
  users: [],
  error: null,
  loading: true,
};

// Create Context
export const UserContext = createContext(initialState);

// Provider Component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Actions
  async function getUsers() {
    try {
      const res = await axios.get('/api/users');
      dispatch({
        type: 'GET_USERS',
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'GET_USERS_ERROR',
        payload: error.res.data.message,
      });
    }
  }

  function addUser(user) {
    dispatch({
      type: 'ADD_USER',
      payload: user,
    });
  }

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        error: state.error,
        loading: state.loading,
        addUser,
        getUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
