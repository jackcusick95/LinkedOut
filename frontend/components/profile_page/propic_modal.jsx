import React from 'react';
import { updateUserImg} from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FcAddImage } from 'react-icons/fc';



// Need to put the below logout button on the navbar when i get to it
class ProPic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profile_photo: null,
            photoUrl: null
        }
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount() {
    //     this.props.fetchAllPosts();
    // }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const { profile_photo, photoUrl } =this.props.currentuser;
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ [profile_photo]: file, [photoUrl]: fileReader.result });
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const { currentuser } = this.props;
        const formData = new FormData();
        formData.append('currentuser[profile_photo]', this.state.profile_photo)
        this.props.updateUserImg(formData, currentuser.id)
            .then(this.props.closeModal);
        // this.setState({
        //     body: "",
        //     photoFile: null,
        //     photoUrl: null
        // });
    }

    render() {
        console.log(this.props);
        const preview = this.state.photoUrl ? <img className="preview-img" src={this.state.photoUrl} /> : null;
        return (

            // <div className="feed-container">
            <div className="modal-form">
                <form onSubmit={this.handleSubmit}>
                    <h2 className="modal-header">Update Profile Picture</h2>
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    <div id="modal-border"></div>
                    {/* <textarea
                        className="modal-textarea"
                        placeholder="What do you want to talk about?"
                        required="required"
                        cols="30"
                        width="100%"
                        onChange={this.handleBody}>
                    </textarea> */}
                    {preview}
                    {/* <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                     <FcAddImage />
                                    </IconContext.Provider> */}
                    <input className="modal-file-button" type="file" onChange={this.handleFile} id="upload-photo" />
                    <button className="modal-post-button" >Post</button>
                </form>
            </div>
            // </div>
        )
    }


}

const mapStateToProps = (state) => {

    return {
        currentuser: state.entities.users[state.session.id],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        updateUserImg: (formData, id) => dispatch(updateUserImg(formData, id)),
    };
};

const ProPicContainer = connect(mapStateToProps, mapDispatchToProps)(ProPic);

export default ProPicContainer;