import React from 'react';
import { updatePost} from '../../actions/post_actions';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
// import { useParams } from 'react-router-dom';


// Need to put the below logout button on the navbar when i get to it
class EditPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.handleBody = this.handleBody.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // componentDidMount() {
        //     this.props.fetchAllPosts();
        // }
        
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
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        this.props.createPost(formData)
            .then(this.props.closeModal);
        this.setState({
            body: "",
            photoFile: null,
            photoUrl: null
        });
    }

    render() {
        console.log(this.props);
        const preview = this.state.photoUrl ? <img className="preview-img" src={this.state.photoUrl} /> : null;
        return (
            <div className="modal-form">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="modal-header">Update Post</h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <div id="modal-border"></div>
                    <textarea
                        className="modal-textarea"
                        placeholder="What do you want to talk about?"
                        required="required"
                        cols="30"
                        width="100%"
                        onChange={this.handleBody}>
                    </textarea>
                    {preview}
                    <input className="modal-file-button" type="file" onChange={this.handleFile} id="upload-photo" />
                    <button className="modal-post-button" >Post</button>
                </form>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        currentuser: state.entities.users[state.session.id],
        users: state.entities.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        updatePost: (post) => dispatch(updatePost(post))
    };
};

const EditPostModal = connect(mapStateToProps, mapDispatchToProps)(EditPost);

export default EditPostModal;

// export default EditPost; 