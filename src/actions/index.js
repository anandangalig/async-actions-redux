import haha from '../api/jsonPlaceholder';

export const fetchPostListActionCreator = async () => {
    const response = await haha.get('/posts');
    return {
        type: 'FETCH_POST_LIST',
        payload: response
    }
} 