import _ from 'lodash';
import jsonPlaceholder from '../api/jsonPlaceholder';

export const fetchPostsAndUsers = () => { 
    return async (dispatch, getState) => {
        //whenever working with nested action creators, we dispatch it from the parent to delegate:
        // in result, thunk will receive the function returned from fetchPosts, and run it, which has its own dispatch and other logic
        await dispatch(fetchPosts());
        const uniqUserIds = _.uniq(_.map(getState().posts, 'userId'));
        uniqUserIds.forEach(id => dispatch(fetchUser(id)));
        // by combining the 2 fetch actions, we are setting both states with 1 action, so UserHeader.js has no need to dispatch any actions. Instead it will have access to already fetched state of user names.
    }
}

export const fetchPosts = () => {
    return async function(dispatch, getState) {
        const response = await jsonPlaceholder.get('/posts');        
        // manually dispatching the action after getting the response:
        dispatch({
            type: 'FETCH_POST_LIST',
            payload: response.data
        });
    }
} 

export const fetchUser = (userId) => {
    return async function(dispatch, getState) {
        const response = await jsonPlaceholder.get(`/users/${userId}`);                
        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        });
    }
}

// ============== MEMOIZED VERSION: ==============================================================
// export const fetchUser = (userId) => {
//     return function(dispatch) {
//         _fetchUser(userId, dispatch);
//     }
// } 
// // internal function that returns a memoized function to avoid making duplicate network requests
// const _fetchUser = _.memoize(async (userId, dispatch) => {
//     const response = await jsonPlaceholder.get(`/users/${userId}`);                
//     dispatch({
//         type: 'FETCH_USER',
//         payload: response.data
//     });
// });


/* NOTE: since actions can only be plain objects, async/await will not work by itself (compiles into a huge ES2015 function with complex structure)

We use a middleware in this situation (Asynchronous Action Creator):
actionCreator -> action -> dispatch(action) -> MIDDLEWARE(stop/mod/massage the action) -> reducers

redux-thunk adds an option to return a function(with dispatch, getState capabilities within) from an action creator. Basically provides a safe space to run API requests and pass it back to the dispatcher in form of a plain object. 
*/
