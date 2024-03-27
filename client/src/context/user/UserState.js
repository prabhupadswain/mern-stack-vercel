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
  // Action - Get all users
  async function getUsers() {
    try {
      const res = await axios.get('/api/users');
      dispatch({
        type: 'GET_USERS',
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'USER_ERROR',
        payload: error.res.data.message,
      });
    }
  }

  // Action - Create a new user
  async function addUser(user) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/users', user, config);
      dispatch({
        type: 'ADD_USER',
        payload: res.data.data,
      });
    } catch (error) {
      dispatch({
        type: 'USER_ERROR',
        payload: error.res.data.message,
      });
    }
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
