import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS} from '../actions/session_actions';

const sessionErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);
    // debugger 
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            // debugger
            return action.errors; 
        case RECEIVE_CURRENT_USER:
            // debugger 
            return []; 
        default:
            return oldState;
    }
}

export default sessionErrorsReducer; 