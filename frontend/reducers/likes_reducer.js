import { RECEIVE_ALL_LIKES, RECEIVE_LIKE, REMOVE_LIKE } from '../actions/like_actions'; 
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';

const likesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {...oldState}; 

    switch (action.type) {
        case RECEIVE_ALL_LIKES:
            return action.likes; 
        case RECEIVE_LIKE:
            newState[action.like.id] = action.like
            return newState;
        case REMOVE_LIKE:
            delete newState[action.likeId];
            return newState;
        case RECEIVE_ALL_POSTS:
            if (action.payload.likes) newState = action.payload.likes
            return newState;
        default:
            return oldState;
    }
}

export default likesReducer;