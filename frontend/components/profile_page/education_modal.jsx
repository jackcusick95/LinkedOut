import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateJob } from '../../actions/job_actions';
import { updateEducation } from '../../actions/education_actions';

class EditEducationItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.educationsArr.filter(
                education => education.user_id == this.props.currentuser.id
            )
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.updateEducation({
            ...this.state
        }).then(this.props.closeModal);
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value });
    }


    render() {
        const {
            school, degree, field, start_date, description
        } = this.state;
        console.log(this.state);
        return (

            <div className="modal-edit">
                <h2 className="modal-edit-header">Edit Experience</h2>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <div className="edit-modal-border"></div>
                <form className="edit-modal-form" onSubmit={this.handleSubmit}>
                    <div className="edit-modal-fullname">
                        <label className="modal-name-label">School *</label>
                        <input
                            type="text"
                            className="modal-fname-input"
                            placeholder={school}
                            value={school}
                            required="required"
                            onChange={this.handleInput('school')} />
                        {/* </div> */}
                        <div className="model-name-container">
                            <label className="modal-name-label">Degree *</label>
                            <input
                                type="text"
                                className="modal-lname-input"
                                placeholder={degree}
                                value={degree}
                                required="required"
                                onChange={this.handleInput('degree')} />
                        </div>
                    </div>
                    <div className="modal-edit-title-location">
                        <div className="model-headline-container">
                            <label className="modal-name-label">Field *</label>
                            <input
                                type="text"
                                className="modal-headline"
                                placeholder={field}
                                value={field}
                                required="required"
                                onChange={this.handleInput('field')} />
                        </div>
                        <div className="model-location-container">
                            <label className="modal-name-label">Start Date</label>
                            <input
                                type="text"
                                className="modal-location"
                                placeholder={start_date}
                                value={start_date}
                                onChange={this.handleInput('start_date')} />
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
        educationsArr: Object.values(state.entities.educations),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        updateJob: (job) => dispatch(updateJob(job)),
        updateEducation: (education) => dispatch(updateEducation(education)),
    };
};

const EditEducation = connect(mapStateToProps, mapDispatchToProps)(EditEducationItem);

export default EditEducation;