// the params will be supplied by the Store during dispatch
export default (state = [], action) => {
    switch(action.type) {
        case 'FETCH_POST_LIST':
            return action.payload;
            break;
        default:
            return state;
    }
}