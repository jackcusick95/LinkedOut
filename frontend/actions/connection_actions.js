import * as APIUtil from '../util/connection_api_util';

export const RECEIVE_CONNECTION = 'RECEIVE_CONNECTION';
export const REMOVE_CONNECTION = 'REMOVE_CONNECTION';
export const RECEIVE_ALL_CONNECTIONS = 'RECEIVE_ALL_CONNECTIONS';


const receiveAllConnections = (connections) => {
    return {
        type: RECEIVE_ALL_CONNECTIONS,
        connections
    }
}

export const receiveConnection = (connection) => {
    return {
        type: RECEIVE_CONNECTION,
        connection
    }
}

const removeConnection = (connectionId) => {
    return {
        type: REMOVE_CONNECTION,
        connectionId
    }
}

export const fetchAllConnections = () => (dispatch) => {
    return APIUtil.fetchAllConnections()
        .then(connections => dispatch(receiveAllConnections(connections)));
}

export const createConnection = (connection) => (dispatch) => {
    return APIUtil.createConnection(connection)
        .then(connection => dispatch(receiveConnection(connection)));
}


export const deleteConnection = (connectionId) => (dispatch) => {
    return APIUtil.deleteConnection(connectionId)
        .then(() => dispatch(removeConnection(connectionId)));
}