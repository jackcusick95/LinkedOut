import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { HiPhotograph } from 'react-icons/hi';



// Need to put the below logout button on the navbar when i get to it
class PostPage extends React.Component {
    constructor(props) {
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
        this.setState({ body: e.currentTarget.value });
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result });
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
            .then(this.props.closeModal);
                // (response) => console.log(response.message),
                // (response) => console.log(response.responseJSON),
    }

    render() {
        console.log(this.state);
        // const { postsArr } = this.props.postsArr;
        const preview = this.state.photoUrl ? <img className="preview-img" src={this.state.photoUrl} /> : null;
        return (

            <div className="feed-container">
                <div className="postfeed">
                    <div className="modal-form">
                        <form onSubmit={this.handleSubmit}>
                            <h2 className="modal-header">Create a post</h2>
                            <div id="modal-border"></div>
                            <textarea
                            className="modal-textarea"
                            placeholder="What do you want to talk about?"
                            required="required"
                            cols="30"
                            width="100%"
                            onChange={this.handleBody}>
                            </textarea>
                            <div>
                                <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                    <HiPhotograph />
                                </IconContext.Provider>
                                <input type="file" onChange={this.handleFile} id="upload-photo"/>
                            </div>
                            {/* <h3>Image preview:</h3> */}
                                {preview}
                            <button>Post</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }


}

export default PostPage;