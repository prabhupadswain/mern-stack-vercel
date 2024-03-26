import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';

// Initial State
const initialState = {
  users: [],
};

// Create Context
export const UserContext = createContext(initialState);

// Provider Component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Actions
  function addUser(user) {
    dispatch({
      type: 'ADD_USER',
      payload: user,
    });
  }

  return (
    <UserContext.Provider value={{ users: state.users, addUser }}>
      {children}
    </UserContext.Provider>
  );
};
