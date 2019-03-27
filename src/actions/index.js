import jsonPlaceholder from '../api/jsonPlaceholder';

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

// NOTE: since actions can only be plain objects, async/await will not work by itself (compiles into a huge ES2015 function with complex structure)

// We use a middleware in this situation (Asynchronous Action Creator):
// actionCreator -> action -> dispatch(action) -> MIDDLEWARE(stop/mod/massage the action) -> reducers

// redux-thunk adds an option to return a function(with dispatch, getState capabilities within) from an action creator. Basically provides a safe space to run API requests and pass it back to the dispatcher in form of a plain object.

export const fetchUser = (userId) => {
    return async function(dispatch, getState) {
        const response = await jsonPlaceholder.get(`/users/${userId}`);                
        dispatch({
            type: 'FETCH_USER',
            payload: response.data
        });
    }
} 