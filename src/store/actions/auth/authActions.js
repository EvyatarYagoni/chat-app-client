import authActionTypes from "../types/auth/authActionTypes";

// in action I can do async opertaiion by using redux thunk middleware.
// redux thunk middleware will allow me to return a function instead of an object.
// redux thunk middleware will pass dispatch as an argument to the function.
// redux thunk middleware will also pass getState as an argument to the function.
// redux thunk middleware will also pass extraArgument as an argument to the function.
// and I can use dispatch to dispatch other actions after the async operation is done.


export const fetchUser = () => {


  // *** THIS is example of async operation. please change that to my logic after user login successfully ***
  return async (dispatch) => {
    try {
      const userData = await UserService.getUserData(); // Assume this fetches user data from an API

      // *** I dispatch an action after async operation is done. before I cant to tact beacuse I need to return an object and not a function. ***
      dispatch({
        type: authActionTypes.LOGIN_SUCCESS,
        // payload: { user: userData },
      });


    } catch (error) {
      dispatch({
        type: FETCH_USER_FAILURE,
        payload: { error: error.message },
      });
    }
  };
};
