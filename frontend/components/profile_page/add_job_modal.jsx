import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { updateJob, createJob } from '../../actions/job_actions';


class AddJobItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: {},
            user_id: this.props.currentuser.id,
            company: "",
            description: "",
            title: "",
            start_date: "",
            end_date: "",
            location: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('job[user_id]', this.state.user_id);
        formData.append('job[company]', this.state.company);
        formData.append('job[description]', this.state.description);
        formData.append('job[title]', this.state.title);
        formData.append('job[start_date]', this.state.start_date);
        formData.append('job[end_date]', this.state.end_date);
        formData.append('job[location]', this.state.location);

        console.log(formData); 
        this.props.createJob(formData)
            .then(this.props.closeModal);
        this.setState({
            company: "",
            description: "",
            title: "",
            start_date: "",
            end_date: "",
            location: ""
        });
    }

    handleInput(field) {
        return e => this.setState({  [field]: e.currentTarget.value } );
    }


    render() {
        const {
            company, description, start_date, title, location, end_date
        } = this.state;
        console.log(this.state);
        return (

            <div className="modal-edit">
                <h2 className="modal-edit-header">Add Job Experience</h2>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <div className="edit-modal-border"></div>
                <form className="edit-modal-form" onSubmit={this.handleSubmit}>
                    <div className="edit-modal-fullname">
                        <label className="modal-name-label">Position *</label>
                        <input
                            type="text"
                            className="modal-fname-input"
                            placeholder={title}
                            value={title}
                            required="required"
                            onChange={this.handleInput('title')} />
                        {/* </div> */}
                        <div className="model-name-container">
                            <label className="modal-name-label">Company *</label>
                            <input
                                type="text"
                                className="modal-lname-input"
                                placeholder={company}
                                value={company}
                                required="required"
                                onChange={this.handleInput('company')} />
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
                        <label className="modal-name-label">Location</label>
                        <input
                            type="text"
                            className="modal-location"
                            placeholder={location}
                            value={location}
                            onChange={this.handleInput('location')} />
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
        jobsArr: Object.values(state.entities.jobs),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        updateJob: (job) => dispatch(updateJob(job)),
        createJob: (job) => dispatch(createJob(job)),
    };
};

const AddJob = connect(mapStateToProps, mapDispatchToProps)(AddJobItem);

export default AddJob;