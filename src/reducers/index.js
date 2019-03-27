import {combineReducers} from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
    //state object will look like this:
    posts: postsReducer,
    users: usersReducer
});

/* reducer rules:
- needs to be pure, and not reach out
- must return any value, except undefined
- must only use the previous state and action to create and NEW state to return */
