import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateJob } from '../../actions/job_actions';
import { updateEducation, createEducation } from '../../actions/education_actions';

class AddEducationItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            education: {},
            user_id: this.props.currentuser.id,
            school: "",
            degree: "",
            field: "",
            start_date: "",
            end_date: "",
            description: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('education[user_id]', this.state.user_id);
        formData.append('education[school]', this.state.school);
        formData.append('education[degree]', this.state.degree);
        formData.append('education[field]', this.state.field);
        formData.append('education[start_date]', this.state.start_date);
        formData.append('education[end_date]', this.state.end_date);
        formData.append('education[description]', this.state.description);

        console.log(formData);
        this.props.createEducation(formData)
            .then(this.props.closeModal);
        this.setState({
            school: "",
            degree: "",
            field: "",
            start_date: "",
            end_date: "",
            description: ""
        });
    }

    handleInput(field) {
        return e => this.setState({ [field]: e.target.value });
    }


    render() {
        const {
            school, degree, field, start_date, end_date, description
        } = this.state;
        console.log(this.state);
        return (

            <div className="modal-edit">
                <h2 className="modal-edit-header">Add Education</h2>
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
                        <div className="start-end-container">
                            <div className="model-start-container">
                                <label className="modal-name-label">Start Year *</label>
                                <input
                                    type="text"
                                    className="modal-start-input"
                                    placeholder={start_date}
                                    value={start_date}
                                    required="required"
                                    onChange={this.handleInput('start_date')} />
                            </div>
                            <div className="model-end-container">
                                <label className="modal-name-label">End Year *</label>
                                <input
                                    type="text"
                                    className="modal-end-input"
                                    placeholder={end_date}
                                    value={end_date}
                                    required="required"
                                    onChange={this.handleInput('end_date')} />
                            </div>
                        </div>
                    </div>
                    <div className="model-location-container">
                        <label className="modal-name-label">Field</label>
                        <input
                            type="text"
                            className="modal-location"
                            placeholder={field}
                            value={field}
                            onChange={this.handleInput('field')} />
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
        createEducation: (education) => dispatch(createEducation(education)),
    };
};

const AddEducation = connect(mapStateToProps, mapDispatchToProps)(AddEducationItem);

export default AddEducation;