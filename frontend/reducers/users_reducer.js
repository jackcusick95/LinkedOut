import { RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const usersReducer = (oldState = {}, action) => {
    Object.freeze();
    let newState = Object.assign( {}, oldState)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            newState[action.currentUser.id] = action.currentUser;
            return newState; 
        case RECEIVE_ALL_POSTS:
            return {...oldState, ...action.payload.users}
        default:
            return oldState;
    }
}

export default usersReducer; 