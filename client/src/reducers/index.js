import { combineReducers } from 'redux';
import posts from './posts.reducers';
import users from './auth.reducers';

export default combineReducers({
  posts,
  users,
});
