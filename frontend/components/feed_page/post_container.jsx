import React from 'react';
import PostPage from './post';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/session_actions';
import { fetchPost, createPost, updatePost, fetchAllPosts, deletePost } from '../../actions/post_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        posts: state.entities.posts,
        users: state.entities.users,
        postsArr: Object.values(state.entities.posts)
        // currentUser: users[session.id]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser()),
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        createPost: (post) => dispatch(createPost(post)),
        updatePost: (post) => dispatch(updatePost(post)),
        deletePost: (postId) => dispatch(deletePost(postId)),
        openModal: (post) => dispatch(openModal(post)),
        textmodal: (
            <textarea
                placeholder="Start a Post"
                required="required"
                cols="30"
                width="100%"
                onClick={() => dispatch(openModal('post'))}>
            </textarea>
        ),

        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);