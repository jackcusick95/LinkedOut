import * as APIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE'; 
export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';


const receiveAllLikes = (likes) => {
    return {
        type: RECEIVE_ALL_LIKES,
        likes
    }
}

export const receiveLike = (like) => {
    return {
        type: RECEIVE_LIKE,
        like
    }
}

const removeLike = (likeId) => {
    return {
        type: REMOVE_LIKE,
        likeId
    }
}

export const fetchAllLikes = () => (dispatch) => {
    return APIUtil.fetchAllLikes()
        .then(likes => dispatch(receiveAllLikes(likes)));
}

export const createLike = (like, postId) => (dispatch) => {
    return APIUtil.createLike(like, postId)
    .then(like => dispatch(receiveLike(like))); 
}

// export const createLike = (like) => (dispatch) => {
//     return APIUtil.createLike(like)
//         .then(like => dispatch(receiveLike(like)));
// }

export const deleteLike = (likeId) => (dispatch) => {
    return APIUtil.deleteLike(likeId)
    .then(() => dispatch(removeLike(likeId)));
}