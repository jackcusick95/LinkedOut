import React from 'react'; 
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FcAddImage, FcCalendar, FcNews, FcVideoCall} from 'react-icons/fc';
import { BsPencilSquare, BsThreeDots } from 'react-icons/bs';
import { FaTrashAlt, FaRegCommentDots, FaLinkedin, FaGithub, FaPortrait } from 'react-icons/fa';
import { BiEdit, BiLike } from 'react-icons/bi';
import EditPost from './edit_post_modal';
import PostPage from './post';
import Modal from '../modal/modal'




// Need to put the below logout button on the navbar when i get to it
class FeedPage extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            post: {}, 
            body: "",
            comment: {},
            commentId: null,
            commentdrop: 'hidden',
            displayComment: false,
            postdrop: 'hidden', 
            photoFile: null,
            photoUrl: null,
            cmtCount: 0,
            like: {},
            liked: false,
            likeId: null,
            likeCount: 0,
            likeable_type: "post", 
            likeable_id: null,
            postId: null,
            editcmt: false,
            editcmtId: null,
            editpost: false,
            editpostid: null,
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
        this.handleCommentDisplay = this.handleCommentDisplay.bind(this); 
        this.handleLike = this.handleLike.bind(this); 
        this.removeLike = this.removeLike.bind(this); 
        this.editComment = this.editComment.bind(this); 
        this.handleEditComment = this.handleEditComment.bind(this); 
        this.leave = this.leave.bind(this); 
        this.cmtleave = this.cmtleave.bind(this); 

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


    componentDidMount() {
        this.props.fetchAllPosts(); 
        this.props.likesArr; 
        this.props.fetchAllConnections();
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
            this.props.createComment(this.state.comment, postId);
            document.getElementById('comment-input').value = null;
            this.state.commentId = postId;
            this.setState({ displayComment: true })
            .then(() => {
                this.commentRefs[postId].current.reset()
            });
        }
    }

    handleEditComment(comment, postId) {
        return (e) => {
            e.preventDefault();
            this.props.updateComment(comment)
                .then(() => {
                    this.state.commentId = postId; 
                    this.setState({ displayComment: true })
                    this.setState({ editcmt: false})
                });
        }
    }

    handleCommentBody(postId) {
        return (e) => {
            this.state.commentId = postId
            this.setState({ comment: {['body']: e.target.value}});
        }
    }

    handleEditCommentBody(comment) {
        return (e) => {
            this.state.commentId = comment.id
            comment.body = e.currentTarget.value;
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

    handleCommentDisplay(postId) {
        return (e) => {
            e.preventDefault(); 
            if (this.state.displayComment === false) {
                this.state.commentId = postId
                this.setState({displayComment: true })
            } else if (this.state.displayComment === true && this.state.commentId !== postId) {
                this.state.commentId = postId
                this.setState({displayComment: true})
            } else if (this.state.displayComment === true && this.state.commentId === postId) {
                this.setState({ displayComment: false })
            }
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


    removeLike(likeObject) {
        return (e) => {
            e.preventDefault(); 
            const likeId = likeObject[0].id;

            this.props.deleteLike(likeId).then(like => {
                this.setState({ like: {} });
                this.setState({ liked: false });
            });
        }
    }

    handleLike(postId) {
        return (e) => {
            e.preventDefault();

                const newLike = {
                    liker_id: this.props.currentuser.id,
                    likeable_id: postId,
                    likeable_type: 'post'
                };
                this.props.createLike(newLike, postId).then(like => {
                    this.setState({ like });
                    this.setState({ liked: true });
                });
        }
    }

    editComment(cmtId) {
        this.setState({ editcmt: true });
        this.setState({ editcmtId: cmtId});
        this.setState({ commentdrop: 'hidden' });
    }


    leave() {
        this.setState({ postdrop: 'hidden' });
    }

    cmtleave() {
        this.setState({ commentdrop: 'hidden' });
    }

    render() {
        console.log(this.state); 
        console.log(this.props);
        const preview = this.state.photoUrl ? <img className="preview-img" src={this.state.photoUrl} /> : null;
        const connectionCount = this.props.connectionsArr.filter((connection) => (connection.connecter_id == this.props.currentuser.id)).length; 

        return (
        <div className="feed-container">
            <div className="grid-container">
                {/* <div className="grid-padding"></div> */}
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
                    <Link to={"/network"}>
                        <div className="pro-sidebar-bottom">
                            <p className="sidebar-connections">Connections:</p>
                                <p className="count-connections">{connectionCount}</p>
                        </div>
                    </Link>
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
                <div className="divider-container">
                            <div className="feedpost-divider"></div><span className="sort-by">Sort by: <p className="recent">Recent</p></span>
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
                            // console.log(this.state); 
                            return (
                                <li className="feedposts" key={post.id}>
                                    <div className="feed-pro-pic">
                                        <img className='post-dogo' src={
                                            postUser.profile_photo ?
                                            postUser.profile_photo :
                                            window.dogo} />
                                        { this.props.currentuser.id == post.author_id ? 
                                            <Link to={"/profile"}>
                                                <h1 className="first-last-name">{firstname} {lastname}</h1>
                                            </Link>
                                            : <Link to={`/userprofile/${post.author_id}`}>
                                                <h1 className="first-last-name">{firstname} {lastname}</h1>
                                            </Link>
                                        }
                                    </div>
                                        <p className="feed-career">{career}</p>
                                        <p className="timestamp">{timeFromNow()}</p>
                                        <h2 id="feed-body">{post.body}</h2>
                                    {this.props.session.id === post.author_id ?
                                        <button className="post-drop" onClick={this.postDropdown(post.id)}><BsThreeDots /></button> : ''
                                    }
                                    <div className={this.postId === post.id ? this.state.postdrop : 'hidden'} onMouseLeave={this.leave}>
                                        <ul>
                                            <li>
                                                <button className="delete-post-drop" onClick={() => this.props.deletePost(post.id)}>
                                                    <IconContext.Provider
                                                        value={{ style: { float: 'left', margin: '0px 10px 0px 5px' } }}>
                                                        <FaTrashAlt></FaTrashAlt>
                                                    </IconContext.Provider>
                                                    <span>Delete Post</span>
                                                </button>
                                            </li>
                                            <li className="edit-post-li">
                                                <div className="edit-post-drop" id={post.id} onClick={this.props.editPostModal}>
                                                    <IconContext.Provider value={{ style: { float: 'left', margin: '0px 10px 0px 5px' } }}>
                                                        <BiEdit id={post.id} onClick={this.props.editPostModal}></BiEdit>
                                                    </IconContext.Provider>
                                                    <span id={post.id} onClick={this.props.editPostModal}>Edit Post</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {postPhoto}
                                    {/* { this.state.editpost ? 
                                    <EditPost /> : <div></div>
                                    } */}
                                    <div className="like-comment-count-container">
                                        <div className="mini-like">
                                            <IconContext.Provider
                                                value={{ style: { margin: '0px 0px 0px 0px', fontSize: '10px' } }}>
                                                <BiLike></BiLike>
                                            </IconContext.Provider>
                                        </div>
                                        <p className="like-count">{this.props.likesArr.filter((like) => like.likeable_id == post.id).length + "  likes"}</p>
                                        <p className="count-divider">|</p>
                                        <p className="comment-count" onClick={this.handleCommentDisplay(post.id)}>{this.props.commentsArr.filter((comment) => comment.post_id == post.id).length + " comments"}</p>
                                    </div>
                                    <div className="like-comment-container">
                                        {this.props.likesArr.filter((like) => like.likeable_id == post.id && like.liker_id == this.props.currentuser.id).length > 0 ?
                                            <button id="liked-button" onClick={this.removeLike(this.props.likesArr.filter((like) => (like.likeable_id == post.id && like.liker_id == this.props.currentuser.id)))}>
                                                <IconContext.Provider
                                                    value={{ style: { float: 'left', margin: '-2px 5px 0px 0px', fontSize: '22px' } }}>
                                                    <BiLike></BiLike>
                                                </IconContext.Provider>
                                                <span>Like</span>
                                            </button>
                                            :<button id="like-button" onClick={this.handleLike(post.id)}>
                                                <IconContext.Provider
                                                    value={{ style: { float: 'left', margin: '-2px 5px 0px 0px', fontSize: '22px' } }}>
                                                    <BiLike></BiLike>
                                                </IconContext.Provider>
                                                <span>Like</span>
                                            </button>
                                        }
                                        <span><div className="comment-span"> </div> </span>
                                        <button id="comment-button" onClick={this.handleCommentDisplay(post.id)} >
                                            <IconContext.Provider
                                                value={{ style: { float: 'left', margin: '-2px 5px 0px 0px', fontSize: '22px' } }}>
                                                <FaRegCommentDots></FaRegCommentDots>
                                            </IconContext.Provider>
                                            <span>Comment</span>
                                        </button>
                                    </div>
                                    { this.state.displayComment === true && post.id === this.state.commentId ?
                                        <div className="comment-section">
                                            <div className="create-comment">
                                                <form id="comment-container" onSubmit={this.handleComment(post.id)}>
                                                    <img className='post-comment-dogo' src={
                                                        this.props.currentuser.profile_photo ?
                                                        this.props.currentuser.profile_photo :
                                                        window.dogo} />
                                                    <input type="text"
                                                        className="comment-form"
                                                        id="comment-input"
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

                                                    let cmtTime = Date.now() - Date.parse(comment.created_at);
                                                    console.log(cmtTime);

                                                    if (cmtTime < 3600000) {
                                                        setInterval(() => {
                                                            cmtTime= Date.now() - Date.parse(comment.created_at)
                                                        }, 60000);
                                                    }

                                                    const timeFromNow = () => {
                                                        if (cmtTime < 60000) {
                                                            return '<1m';
                                                        } else if (cmtTime < 3600000) {
                                                            return Math.floor(cmtTime / 60000) + 'm';
                                                        } else if (cmtTime < 86400000) {
                                                            return Math.floor(cmtTime / 3600000) + 'h';
                                                        } else {
                                                            return Math.floor(cmtTime / 86400000) + 'd';
                                                        }
                                                    }

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
                                                                {this.state.editcmt && this.state.editcmtId == comment.id ?
                                                                <div className="update-comment-container">
                                                                    <input type="text"
                                                                        className="comment-edit-text"
                                                                        required="required"
                                                                        placeholder={comment.body}
                                                                        onChange={this.handleEditCommentBody(comment)} 
                                                                    />
                                                                     <button className="update-comment-button" onClick={this.handleEditComment(comment, post.id)}>Update</button>
                                                                </div>
                                                                : <p id="comment-body">{comment.body}</p>
                                                            }
                                                            </div>
                                                            <div className="comment-topright">
                                                                {this.props.session.id === comment.author_id ?
                                                                <div>
                                                                    <p className="cmt-timestamp">{timeFromNow()}</p>
                                                                    <button className="comment-drop" onClick={this.commentDropdown(comment.id)}><BsThreeDots /></button> 
                                                                </div>: 
                                                                    <p className="cmt-timestamp-two">{timeFromNow()}</p>
                                                                }
                                                            </div>
                                                            <div className={this.commentId === comment.id ? this.state.commentdrop : 'hidden'} onMouseLeave={this.cmtleave}>
                                                                <ul>
                                                                    <li>
                                                                        <button className="delete-post-drop" onClick={() => this.props.deleteComment(comment.id)}>
                                                                            <IconContext.Provider
                                                                                value={{ style: { float: 'left', margin: '0px 10px 0px 5px' } }}>
                                                                                <FaTrashAlt></FaTrashAlt>
                                                                            </IconContext.Provider>
                                                                            <span>Delete Comment</span>
                                                                        </button>
                                                                    </li>
                                                                    <li className="edit-post-li">
                                                                        <button className="edit-post-drop" onClick={() => this.editComment(comment.id)} >
                                                                            <IconContext.Provider
                                                                                value={{ style: { float: 'left', margin: '0px 10px 0px 5px' } }}>
                                                                                <BiEdit></BiEdit>
                                                                            </IconContext.Provider>
                                                                            <span>Edit Comment</span>
                                                                        </button>
                                                                    </li>

                                                                </ul>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                    : <div></div>}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
                    <div className="news-sidebar">
                        <img className='feed-faceshot' src={window.anotherface} />
                        <h1 className='feed-name'>Jack Cusick</h1>
                        <div className="feed-profilebox-icons">
                            <div className="nav-profile">
                                <div>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jack-cusick-2a5809b4/">
                                        <IconContext.Provider value={{ style: { fontSize: '35px'} }}>
                                            <FaLinkedin className="linkedin-nav-button" />
                                        </IconContext.Provider>
                                        <p className="profile-text">LinkedIn</p>
                                    </a>
                                </div>
                            </div>
                            <div className="nav-profile">
                                <div>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jackcusick95">
                                        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                            <FaGithub className="profile-nav-button" />
                                        </IconContext.Provider>
                                        <p className="profile-text">Github</p>
                                    </a>
                                </div>
                            </div>
                            <div className="nav-signout">
                                <div>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.jackcusick95.com/">
                                        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                            <FaPortrait className="nav-logout" />
                                        </IconContext.Provider>
                                        <p className="profile-text">Website</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        )
    }


}


export default FeedPage; 