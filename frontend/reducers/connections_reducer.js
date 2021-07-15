import { RECEIVE_ALL_CONNECTIONS, RECEIVE_CONNECTION, REMOVE_CONNECTION } from '../actions/connection_actions';

const connectionsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = { ...oldState };

    // debugger
    switch (action.type) {
        case RECEIVE_ALL_CONNECTIONS:
            return action.connections;
        case RECEIVE_CONNECTION:
            newState[action.connection.id] = action.connection
            return newState;
        case REMOVE_CONNECTION:
            delete newState[action.connectionId];
            return newState;
        default:
            return oldState;
    }
}

export default connectionsReducer;