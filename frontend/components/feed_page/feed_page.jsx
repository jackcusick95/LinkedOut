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
            postdrop: 'hidden', 
            photoFile: null,
            photoUrl: null,
            // timenow: Date.now() - Date.parse(post.createdAt),
            // like: null,
            // liked: false
            // likeCount: this.props.post.likes
        }
        this.commentRef = {};
        
        // if (this.state.timenow < 3600000) {
        //     setInterval(() => this.setState({ timenow: Date.now() - Date.parse(post.createdAt)}), 60000);
        // }


        this.handleBody = this.handleBody.bind(this);
        this.handleFile = this.handleFile.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleComment = this.handleComment.bind(this);
        this.handleCommentBody = this.handleCommentBody.bind(this); 
        this.handleLike = this.handleLike.bind(this); 
        // this.displayLikes = this.displayLikes.bind(this);
        // this.hideLikes = this.hideLikes.bind(this);

    }

    timeFromNow() {
    //    const { timenow } = this.state;
       if (timenow < 60000) {
           return '<1m';
       } else if (timenow < 3600000) {
           return Math.floor(timenow / 60000) + 'm';
       } else if (timenow < 86400000) {
           return Math.floor(timenow / 3600000) + 'h';
       } else {
           return Math.floor(timenow / 86400000) + 'd'; 
       }
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

    postDropdown(postId) {
        return (e) => {
            e.preventDefault();
            if (this.state.postdrop === 'hidden') {
                this.postId = postId;
                this.setState({ postdrop: 'postshow' })
            } else this.setState({ postdrop: 'hidden' })
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
        // const postPhoto = this.post.photoUrl ? <img id="feed-image" src={post.photoUrl} /> : null; 
        return (
        
        <div className="feed-container">
            <div className="profile-sidebar">
               {/* <div className="sidebar-block"></div> */}
                    <img className='sidebar-block' src={
                        this.props.currentuser.wall_photo ?
                            this.props.currentuser.wall_photo :
                            window.wallpic} />
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
                <p className="sidebar-viewprofile">Recent profile visits: </p> <p className="viewprofile-num"> 12</p>
                <p className="sidebar-connections">Connections: *Coming soon*</p>
            </div>
            <div className="news-sidebar">
                <h1 className="news-sidebar-header">LinkedOut News:</h1>
                    <a className="article" href="https://news.linkedin.com/2021/may/our-2021-grad-s-guide-to-getting-hired">* 2021 Guide to Getting Hired *</a><br></br>
                    <a className="article" href="https://news.linkedin.com/2021/april/creating-trusted-connections">* Creating Trusted Connectings *</a><br></br>
                    <a className="article" href="https://news.linkedin.com/2021/march/an-update-on-linkedin-china">* An update on LinkedIn China *</a><br></br>
                    <a className="article" href="https://news.linkedin.com/2020/october/helping-job-seekers-take-their-next-step">* Helping jobseekers with next steps *</a><br></br>
                    <a className="article" href="https://news.linkedin.com/2020/march/most-in-demand-jobs-during-coronavirus---companies-hiring">* Most in-demand jobs during covid *</a>
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
                        {/* {this.props.iconmodal} */}
                            <div className="post-icons">
                                <div className="first-icon">
                                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                        <FcAddImage onClick={() => this.props.openModal('post')}/>
                                    </IconContext.Provider>
                                </div>
                                <p onClick={ () => this.props.openModal('post')} >Photo</p>
                                <div className="second-icon">
                                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                        <FcVideoCall onClick={() => this.props.openModal('post')}/>
                                    </IconContext.Provider>
                                </div>
                                <p onClick={() => this.props.openModal('post')}>Video</p>
                                <div className="third-icon">
                                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                        <FcCalendar onClick={() => this.props.openModal('post')}/>
                                    </IconContext.Provider>
                                </div>
                                <p onClick={() => this.props.openModal('post')}>Event</p>
                                <div className="fourth-icon">
                                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                        <FcNews onClick={() => this.props.openModal('post')}/>
                                    </IconContext.Provider>
                                </div>
                                <p onClick={() => this.props.openModal('post')}>Article</p>
                        </div>
                    </form>
                </div>
                <div>
                    <ul className="singlepost">
                        {[...this.props.postsArr].reverse().map((post) => {
                            const postUser = this.props.users[post.author_id];
                            const firstname = this.props.users[post.author_id].fname;
                            const lastname = this.props.users[post.author_id].lname;
                            const career = this.props.users[post.author_id].title;
                            const postPhoto = post.photoUrl ? <img id="feed-image" src={post.photoUrl} /> : <div></div>;
                            let timenow = Date.now() - Date.parse(post.created_at); 
                            console.log(timenow);

                            if (timenow < 3600000) {
                                setInterval(() => { 
                                    timenow = Date.now() - Date.parse(post.created_at) 
                                }, 60000);
                            }

                            const timeFromNow = () => {
                                if (timenow < 60000) {
                                    return '<1m';
                                } else if (timenow < 3600000) {
                                    return Math.floor(timenow / 60000) + 'm';
                                } else if (timenow < 86400000) {
                                    return Math.floor(timenow / 3600000) + 'h';
                                } else {
                                    return Math.floor(timenow / 86400000) + 'd';
                                }
                            }
                            console.log(this.state); 
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
                                        <p className="timestamp">{timeFromNow()}</p>
                                        <h2 id="feed-body">{post.body}</h2>
                                    {this.props.session.id === post.author_id ?
                                        <button className="post-drop" onClick={this.postDropdown(post.id)}><BsThreeDots /></button> : ''
                                    }
                                    <div className={this.postId === post.id ? this.state.postdrop : 'hidden'}>
                                        <button className="delete-post-drop" onClick={() => this.props.deletePost(post.id)}>
                                            <IconContext.Provider
                                                value={{ style: { float: 'left', margin: '0px 10px 0px 5px' } }}>
                                                <FaTrashAlt></FaTrashAlt>
                                            </IconContext.Provider>
                                            <span>Delete Post</span>
                                        </button>
                                    </div>
                                        {postPhoto}
                                        {/* <div className="like-and-comment-box">

                                        </div> */}
                        
                                        {/* <PostLike post={post}/> */}
                                                    {/* <div className="count-bar"> */}
                                                        {/* <div>{this.props.likes.length} likes</div> */}
                                                    {/* </div> */}
                                                    {/* <div className="option-bar">
                                                        <button className='option-btn' onClick={this.toggleLike}>
                                                            <i className="far fa-thumbs-up"></i>
                                                            <div>Like</div>
                                                        </button>
                                                    </div> */}
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
                                                        <p id="comment-user-title">{commentUser.title}</p>
                                                        <p id="comment-body">{comment.body}</p>
                                                    </div>
                                                    {this.props.session.id === comment.author_id ?
                                                        <button className="comment-drop" onClick={this.commentDropdown(comment.id)}><BsThreeDots /></button> : ''
                                                    }
                                                    <div className={this.commentId === comment.id ? this.state.commentdrop : 'hidden'}>
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