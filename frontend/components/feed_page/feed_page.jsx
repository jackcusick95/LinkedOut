import React from 'react'; 
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FcAddImage, FcCalendar, FcNews, FcVideoCall} from 'react-icons/fc';
import { BsPencilSquare, BsThreeDots } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import PostPage from './post';




// Need to put the below logout button on the navbar when i get to it
class FeedPage extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            post: {}, 
            body: "",
            comment: {},
            commentdrop: 'hidden',
            photoFile: null,
            photoUrl: null,
            // like: null,
            // liked: false
            // likeCount: this.props.post.likes
        }
        this.commentRef = {};
        // this.postRef = React.createRef();

        this.handleBody = this.handleBody.bind(this);
        this.handleFile = this.handleFile.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleComment = this.handleComment.bind(this);
        this.handleCommentBody = this.handleCommentBody.bind(this); 
        this.handleLike = this.handleLike.bind(this); 
        // this.displayLikes = this.displayLikes.bind(this);
        // this.hideLikes = this.hideLikes.bind(this);

    }

    // commentRef(postId) {
    //     const commentRef = React.createRef();
    //     this.commentRefs[postId] = commentRef;
    //     return commentRef
    // }

    componentDidMount() {
        this.props.fetchAllPosts(); 
    }

    handleBody(e) {
        this.setState({body: e.currentTarget.value}); 
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader(); 
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result}); 
            // this.setState({ post: {...this.state.post, ['photoUrl']: fileReader.result, ['photoFile']: file}});
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        formData.append('post[photo]', this.state.photoFile); 
        this.props.createPost(formData)
        .then(
            (response) => console.log(response.message),
            (response) => console.log(response.responseJSON)
        );
    }

    handleComment(postId) {
        return (e) => {
            e.preventDefault();
            this.postCommentId = -1;
            this.props.createComment(this.state.comment, postId)
            .then(()=>{
                this.commentRefs[postId].current.reset()
            });
        }
    }

    handleCommentBody(postId) {
        return (e) => {
            this.postCommentId = postId
            this.setState({ comment: {['body']: e.target.value}});
        }
    }

    commentDropdown(commentId) {
        return (e) => {
            e.preventDefault();
            if (this.state.commentdrop === 'hidden') {
                this.commentId = commentId;
                this.setState({commentdrop: 'show'})
            } else this.setState({commentdrop: 'hidden'})
        }
    }

    handleLike() {
        if (this.props.like) {
            this.props.deleteLike(this.props.like.id);
        } else {
            this.props.createLike({
                likeable_id: this.props.likeable_id,
                likeable_type: this.props.likeable_type,
                liker_id: this.props.liker_id
            });
        }
    }

    // displayLikes() {
    //     this.setState({ showLikes: true });
    // }

    // hideLikes() {
    //     this.setState({ showLikes: false });
    // }

    render() {
        console.log(this.state); 
        console.log(this.props);
        // const { postsArr } = this.props.postsArr;
        const preview = this.state.photoUrl ? <img className="preview-img" src={this.state.photoUrl} /> : null;
        return (
        
        <div className="feed-container">
            <div className="profile-sidebar">
               <div className="sidebar-block"></div>
                    <Link to={"/profile"}>
                    <img className='sidebar-photo' src={
                        this.props.currentuser.profile_photo ?
                            this.props.currentuser.profile_photo :
                            window.dogo} />
                    </Link>
                <Link to={"/profile"}>
                    <h1 className="sidebar-name">{this.props.currentuser.fname} {this.props.currentuser.lname}</h1>
                </Link>
                <p className="sidebar-title">{this.props.currentuser.title}</p>
                <p className="sidebar-viewprofile">Who viewed your profile:</p>
                <p className="sidebar-connections">Connections:</p>
            </div>
            <div className="news-sidebar">
                <h1 className="news-sidebar-header">LinkedOut News:</h1>
            </div>
            <div className="postfeed">
                <div className="post-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="post-pic">
                            <img className='dogo' src={
                                this.props.currentuser.profile_photo ?
                                this.props.currentuser.profile_photo :
                                window.dogo} />
                            {this.props.textmodal}
                        </div>
                        <div className="post-icons">
                            <div className="first-icon">
                                <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                    <FcAddImage />
                                </IconContext.Provider>
                            </div>
                                <p>Photo</p>
                                <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                    <FcVideoCall />
                                </IconContext.Provider>
                                <p>Video</p>
                                <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                    <FcCalendar />
                                </IconContext.Provider>
                                <p>Event</p>
                                <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                    <FcNews />
                                </IconContext.Provider>
                                <p>Article</p>
                        </div>
                    </form>
                </div>
                <div>
                    <ul className="singlepost">
                        {[...this.props.postsArr].map((post) => {
                            const postUser = this.props.users[post.author_id];
                            const firstname = this.props.users[post.author_id].fname;
                            const lastname = this.props.users[post.author_id].lname;
                            const career = this.props.users[post.author_id].title;
                            return (
                                <li className="feedposts" key={post.id}>
                                    <div className="feed-pro-pic">
                                        <img className='post-dogo' src={
                                            postUser.profile_photo ?
                                            postUser.profile_photo :
                                            window.dogo} />
                                        <h1 className="first-last-name">{firstname} {lastname}</h1>
                                    </div>
                                        <p className="feed-career">{career}</p>
                                        <h2 id="feed-body">{post.body}</h2>
                                        <img id="feed-image" src={post.photoUrl} />
                                        {/* <PostLike post={post}/> */}
                                                    <div className="count-bar">
                                                        {/* <div>{this.props.likes.length} likes</div> */}
                                                    </div>
                                                    <div className="option-bar">
                                                        <button className='option-btn' onClick={this.toggleLike}>
                                                            <i className="far fa-thumbs-up"></i>
                                                            <div>Like</div>
                                                        </button>
                                                    </div>
                                    <div className="create-comment">
                                        <form className="comment-container" onSubmit={this.handleComment(post.id)}>
                                            <img className='post-comment-dogo' src={
                                                this.props.currentuser.profile_photo ?
                                                this.props.currentuser.profile_photo :
                                                window.dogo} />
                                            <input type="text"
                                                className="comment-form"
                                                required="required"
                                                placeholder="Add a comment..."
                                                onChange={this.handleCommentBody(post.id)}
                                            />
                                            <button className="post-comment-button">Post</button>
                                        </form>
                                    </div>
                                    <div className="post-comments">
                                        {[...this.props.commentsArr].map((comment) => {
                                            const commentUser = this.props.users[comment.author_id];
                                            if (comment.post_id == post.id)
                                            return (
                                                <div className="display-comment" key={comment.id}>
                                                        <img className='comment-dogo' src={
                                                            commentUser.profile_photo ?
                                                            commentUser.profile_photo :
                                                            window.dogo} />
                                                    <div id="comment-box">
                                                        <h2 id="comment-name">{commentUser.fname} {commentUser.lname}</h2>
                                                        <p id="comment-body">{comment.body}</p>
                                                    </div>
                                                    {this.props.session.id === comment.author_id ?
                                                        <button className="comment-drop" onClick={this.commentDropdown(comment.id)}><BsThreeDots /></button> : ''
                                                    }
                                                    <div className={this.commentId === comment.id ? this.state.cmtDropdown : 'hidden'}>
                                                        <button onClick={() => this.props.deleteComment(comment.id)}>
                                                            <IconContext.Provider
                                                                value={{ style: { float: 'left', margin: '0px 10px 0px 5px' } }}>
                                                                <FaTrashAlt></FaTrashAlt>
                                                            </IconContext.Provider>
                                                            <span>Delete Comment</span>
                                                        </button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            {/* <div className="news-sidebar"></div> */}
        </div>
        )
    }


}

export default FeedPage; 