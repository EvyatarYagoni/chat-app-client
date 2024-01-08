import AUTH_ACTION_TYPES from '../../actions/types/auth/authActionTypes';

const initialState = {
  user: null,
  isLoggedIn: false,
  // Other user-related data...
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        isLoggedIn: true,
      };
    case AUTH_ACTION_TYPES.LOGOUT:
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    // Other cases...
    default:
      return state;

  }
};
