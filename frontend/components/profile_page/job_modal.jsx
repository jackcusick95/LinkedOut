import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateJob } from '../../actions/job_actions';


class EditJobItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.currentuser,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.updateJob({
            ...this.state
        }).then(this.props.closeModal);
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value });
    }


    render() {
        const {
            company, description, start_date, end_date, title, location
        } = this.state;
        return (

            <div className="modal-edit">
                <h2 className="modal-edit-header">Edit Experience</h2>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <div className="edit-modal-border"></div>
                <form className="edit-modal-form" onSubmit={this.handleSubmit}>
                    <div className="edit-modal-fullname">
                        <label className="modal-name-label">First Name *</label>
                        <input
                            type="text"
                            className="modal-fname-input"
                            placeholder={fname}
                            value={fname}
                            required="required"
                            onChange={this.handleInput('fname')} />
                        {/* </div> */}
                        <div className="model-name-container">
                            <label className="modal-name-label">Headline *</label>
                            <input
                                type="text"
                                className="modal-lname-input"
                                placeholder={title}
                                value={title}
                                required="required"
                                onChange={this.handleInput('title')} />
                        </div>
                    </div>
                    <div className="modal-edit-title-location">
                        <div className="model-headline-container">
                            <label className="modal-name-label">Last Name *</label>
                            <input
                                type="text"
                                className="modal-headline"
                                placeholder={lname}
                                value={lname}
                                required="required"
                                onChange={this.handleInput('lname')} />
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
                    </div>
                    <div className="model-description-container">
                        <label className="modal-description-label">Description</label>
                        <textarea
                            className="modal-description-textarea"
                            placeholder={description}
                            value={description}
                            cols="30"
                            width="80%"
                            onChange={this.handleInput('description')}>
                        </textarea>
                    </div>
                    <button className="modal-edit-save" >Save</button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        currentuser: state.entities.users[state.session.id],
        users: state.entities.users,
        // currentjob: 
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        updateJob: (job) => dispatch(updateJob(job))
    };
};

const EditJob = connect(mapStateToProps, mapDispatchToProps)(EditJobItem);

export default EditJob;