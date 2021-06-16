import React from 'react';
import FeedPage from './feed_page';
import { connect } from 'react-redux'; 
import { logoutUser } from '../../actions/session_actions';
import { fetchPost, createPost, updatePost, fetchAllPosts, deletePost } from '../../actions/post_actions';
import {openModal, closeModal } from '../../actions/modal_actions';
import {createComment, updateComment, deleteComment } from '../../actions/comment_actions';
import {createLike, deleteLike} from '../../actions/like_actions';
import { findLike } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.entities.posts,
        currentuser: state.entities.users[state.session.id],
        postsArr: Object.values(state.entities.posts),
        users: state.entities.users,
        session: state.session,
        comments: state.entities.comments,
        commentsArr: Object.values(state.entities.comments),
        likesArr: Object.values(state.entities.likes),
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
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId)),
        openModal: (modal) => dispatch(openModal(modal)),

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