const UserReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case 'ADD_USER':
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    case 'GET_USERS_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UserReducer;
