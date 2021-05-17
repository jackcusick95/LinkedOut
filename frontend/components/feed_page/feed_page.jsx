import React from 'react'; 
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FcAddImage, FcCalendar, FcNews, FcVideoCall} from 'react-icons/fc';
import PostPage from './post';



// Need to put the below logout button on the navbar when i get to it
class FeedPage extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            post: {}, 
            body: "",
            photoFile: null,
            photoUrl: null
        }
        // this.postRef = React.createRef();

        this.handleBody = this.handleBody.bind(this);
        this.handleFile = this.handleFile.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

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

    render() {
        console.log(this.state); 
        // const { postsArr } = this.props.postsArr;
        const preview = this.state.photoUrl ? <img className="preview-img" src={this.state.photoUrl} /> : null;
        return (
        
        <div className="feed-container">
            <div className="profile-sidebar">
                <h1>Profile Sidebar</h1>
            </div>
            <div className="postfeed">
                <div className="post-form">
                    <form onSubmit={this.handleSubmit}>
                        <div className="post-pic">
                            <img className='dogo' src={window.dogo} />
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
                        {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
                    </form>
                </div>
                <div>
                    <ul className="singlepost">
                        {[...this.props.postsArr].reverse().map((post) => {
                            const firstname = this.props.users[this.props.session.id].fname;
                            const lastname = this.props.users[this.props.session.id].lname;
                            const career = this.props.users[this.props.session.id].title;
                            return (
                                <li className="feedposts" key={post.id}>
                                    <div className="feed-pro-pic">
                                        <img className='post-dogo' src={window.dogo} />
                                        <h1 className="first-last-name">{firstname} {lastname}</h1>
                                    </div>
                                    <p className="feed-career">{career}</p>
                                    <h2 id="feed-body">{post.body}</h2>
                                    <img id="feed-image" src={post.photoUrl} />
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
            {/* <div className="profile-sidebar">
                <h1>Profile Sidebar</h1>
            </div> */}
        </div>
        )
    }


}

export default FeedPage; 