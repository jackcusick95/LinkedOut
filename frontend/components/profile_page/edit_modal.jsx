import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateUser } from '../../actions/session_actions'; 

// Need to put the below logout button on the navbar when i get to it
class EditModalItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.currentuser,
            // fname: this.props.currentuser.fname,
            // lname: this.props.currentuser.lname,
            // title: this.props.currentuser.title,
            // location: this.props.currentuser.location
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault();
    
        this.props.updateUser({
            ...this.state
        }).then(this.props.closeModal);
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value }); 
    }


    render() {
        const {
            fname, lname, title, location
        } = this.state;
        return (

            <div className="modal-edit">
                <h2 className="modal-edit-header">Edit user info</h2>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <div className="edit-modal-border"></div>
                <form onSubmit={this.handleSubmit}>
                    <div className="edit-modal-fullname">
                        {/* <div className="model-fname-container"> */}
                            <label className="modal-fname-label">First Name</label>
                                <input 
                                    type="text"
                                    className="modal-name-input"
                                    placeholder={fname}
                                    value={fname}
                                    required="required"
                                    onChange={this.handleInput('fname')}/>
                         {/* </div> */}
                        <div className="model-name-container">
                            <label className="modal-lname-label">Last Name</label>
                                <input
                                    type="text"
                                    className="modal-name-input"
                                    placeholder={lname}
                                    value={lname}
                                    required="required"
                                    onChange={this.handleInput('lname')} />
                        </div>
                    </div>
                    <div className="modal-edit-title-location">
                            <div className="model-headline-container">
                                <label className="modal-name-label">Headline</label>
                                    <input
                                        type="text"
                                        className="modal-headline"
                                        placeholder={title}
                                        value={title}
                                        required="required"
                                        onChange={this.handleInput('title')} />
                            </div>
                            <div className="model-location-container">
                                <label className="modal-name-label">Location</label>
                                    <input
                                        type="text"
                                        className="modal-location"
                                        placeholder={location}
                                        value={location}
                                        onChange={this.handleInput('location')} />
                        </div>
                        <button className="modal-edit-save" >Save</button>
                    </div>
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
        updateUser: (user) => dispatch(updateUser(user))
    };
};

const EditModal = connect(mapStateToProps, mapDispatchToProps)(EditModalItem);

export default EditModal;