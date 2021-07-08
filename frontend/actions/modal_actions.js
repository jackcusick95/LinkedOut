export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
import * as APIUtil from '../util/post_api_util';

export const openModal = (modal) => {
    return {
        type: OPEN_MODAL,
        modal
        // data: {modal: modal, postid: postId }
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};

export const updateModal = (postId, modal) => (dispatch) => {
    return APIUtil.fetchPostModal(postId, modal)
        .then(modal => dispatch(openModal(postId, modal)));
}