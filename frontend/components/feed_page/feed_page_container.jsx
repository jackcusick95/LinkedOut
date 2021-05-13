
import FeedPage from './feed_page';
import { connect } from 'react-redux'; 
import { logoutUser } from '../../actions/session_actions';
import { fetchPost, createPost, updatePost, fetchAllPosts, deletePost } from '../../actions/post_actions';

const mapStateToProps = (state) => {
    return {
        posts: state.entities.posts,
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
        deletePost: (postId) => dispatch(deletePost(postId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);