import React from 'react'; 
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { HiPhotograph} from 'react-icons/hi';



// Need to put the below logout button on the navbar when i get to it
class FeedPage extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
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
        const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null; 
        return (

        <div>
            <div className="post-form">
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        placeholder="Start a Post"
                        required="required"
                        cols="30"
                        width="100%"
                        onChange={this.handleBody}>
                        </textarea>
                    <div>
                        <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                            <HiPhotograph />
                        </IconContext.Provider>
                        <input type="file" onChange={this.handleFile}/>
                    </div>
                    <h3>Image preview:</h3>
                    {preview}
                    <button>Post</button>
                </form>
            </div>
                <ul>
                    {[...this.props.postsArr].map((post) => {
                        return (
                            <li key={post.id}>
                                <h2>{post.body}</h2>
                                <img src={post.photoUrl} />
                            </li>
                        );
                    })}
                </ul>
                <Link to={"/"}>
                    <button onClick={this.props.logoutUser}>Sign Out</button>
                </Link>
        </div>
        )
    }


}

export default FeedPage; 