import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {...oldState};
    debugger 
    switch (action.type) {
        case RECEIVE_COMMENT:
            newState[action.comment.id] = action.comment
            return newState; 
        case REMOVE_COMMENT:
            delete newState[action.commentId];
            return newState;
        case RECEIVE_ALL_POSTS:
            if (action.payload.comments) newState = action.payload.comments
            return newState; 
        default:
            return oldState;
    }
}

export default commentsReducer;