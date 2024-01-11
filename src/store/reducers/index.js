import { combineReducers } from 'redux';
// Import other reducers as needed
import userReducer  from '../slices/user/userSlice';

const reducers = {
  // Add other reducers here
  user: userReducer,
}
export default reducers;
