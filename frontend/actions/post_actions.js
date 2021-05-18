import * as APIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receiveAllPosts = (payload) => {
    return {
        type: RECEIVE_ALL_POSTS,
        payload
    }
}

const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post
    }
}

const removePost = (postId) => {
    return {
        type: REMOVE_POST,
        postId
    }
}

export const fetchAllPosts = () => (dispatch) => {
    return APIUtil.fetchAllPosts()
    .then(payload => dispatch(receiveAllPosts(payload))); 
}

export const fetchPost = (postId) => (dispatch) => {
    return APIUtil.fetchPost(postId)
    .then(post => dispatch(receivePost(post))); 
}

export const createPost = (post) => (dispatch) => {
    return APIUtil.createPost(post) 
    .then(post => dispatch(receivePost(post)));
}

export const updatePost = (post) => (dispatch) => {
    return APIUtil.updatePost(post)
    .then(post => dispatch(receivePost(post)));
}

export const deletePost = (postId) => (dispatch) => {
    return APIUtil.deletePost(postId) 
    .then(() => dispatch(removePost(postId))); 
}
