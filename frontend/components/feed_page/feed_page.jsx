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
        }
        // this.postRef = React.createRef();

        this.handleBody = this.handleBody.bind(this);
        this.handleFile = this.handleFile.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleBody(e) {
        this.setState({body: e.currentTarget.value}); 
    }

    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]}); 
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        formData.append('post[photo]', this.state.photoFile); 
        this.props.createPost(formData)
        // .then(() => this.postRef.current.reset()); 

        // $.ajax({
        //     method: 'POST',
        //     url: '/api/posts',
        //     data: formData,
        //     contentType: false,
        //     processData: false
        // }).then(
        //     (response) => console.log(response.message),
        //     (response) => console.log(response.responseJSON)
        // );
    }

    render() {
        console.log(this.state); 
        const { posts } = this.props.posts;
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
                    <button>Post</button>
                </form>
            </div>
                {/* <ul>
                    {posts.map(post => {
                        return (
                            <li key={post.id}>
                                <h2>{post.title}</h2>
                                <img src={post.photoUrl} />
                            </li>
                        );
                    })}
                </ul> */}
                <Link to={"/"}>
                    <button onClick={this.props.logoutUser}>Sign Out</button>
                </Link>
        </div>
        )
    }


}

export default FeedPage; 