import React, { createContext, useReducer } from 'react';
import UserReducer from './UserReducer';

// Initial State
const initialState = {
  users: [
    { id: 1, username: 'Anna Doe', age: 30, salaried: true },
    { id: 2, username: 'John Smith', age: 29, salaried: false },
    { id: 3, username: 'Will Williams', age: 45, salaried: false },
    { id: 4, username: 'Harry Johnson', age: 40, salaried: true },

  ],
};

// Create Context
export const UserContext = createContext(initialState);

// Provider Component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={{ users: state.users }}>
      {children}
    </UserContext.Provider>
  );
};
