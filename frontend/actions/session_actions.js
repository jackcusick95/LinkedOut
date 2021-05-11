import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER,
    }
}

const receiveErrors = (errors) => {
    // debugger
    return {
        type: RECEIVE_SESSION_ERRORS,
        errors
    }
}

export const loginUser = (user) => (dispatch) => {
    // debugger 
    APIUtil.loginUser(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    err => (dispatch(receiveErrors(err.responseJSON))));
}

export const signupUser = (user) => (dispatch) => {
    // debugger
    APIUtil.signupUser(user)
        .then(user => dispatch(receiveCurrentUser(user))),
        err => (dispatch(receiveErrors(err.responseJSON)));
}

export const logoutUser = () => (dispatch) => {
    // debugger
    APIUtil.logoutUser()
    .then(user => dispatch(logoutCurrentUser(user)));
}