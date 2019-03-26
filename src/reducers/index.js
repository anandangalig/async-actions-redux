import {combineReducers} from 'redux';
import postsReducer from './postsReducer';

export default combineReducers({
    posts: postsReducer
});

/* reducer rules:
- needs to be pure, and not reach out
- must return any value, except undefined
- must only use the previous state and action to create and NEW state to return */
