import React from 'react';
import FeedPage from './feed_page';
import { connect } from 'react-redux'; 
import { logoutUser } from '../../actions/session_actions';
import { fetchPost, createPost, updatePost, fetchAllPosts, deletePost } from '../../actions/post_actions';
import {openModal, closeModal } from '../../actions/modal_actions';
import {createComment, updateComment, deleteComment } from '../../actions/comment_actions';


const mapStateToProps = (state) => {
    return {
        posts: state.entities.posts,
        currentuser: state.entities.users[state.session.id],
        postsArr: Object.values(state.entities.posts),
        users: state.entities.users,
        session: state.session,
        comments: state.entities.comments,
        commentsArr: Object.values(state.entities.comments),
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
        createComment: (comment, postId) => dispatch(createComment(comment, postId)),
        updateComment: (comment) => dispatch(updateComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),

        textmodal: (
                <textarea
                        className="feed-post-box"
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

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);