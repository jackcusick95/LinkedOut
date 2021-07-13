import React from 'react';
import EditJobItem from './job_modal';
import { IconContext } from "react-icons";
import EditJob from './job_modal';
import { BsPencil } from 'react-icons/bs';
import { openModal } from '../../actions/modal_actions';
// import { BsPencil } from "react-icons/bs";
// import { IoAdd } from "react-icons/io";
// import { openModal } from '../../actions/modal_actions';

class UserExperienceInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            jobId: null,
            showMyComponent: false,
        }
    }

    componentDidMount() {
        this.props.fetchAllJobs();
        this.props.fetchAllEducations();
    }

    // handleJobId(jobId) {
    //     this.setState({ jobId: jobId });
    // }


    render() {
        console.log(this.props);

        return (
            <div>
                <div className="experience-box">
                    {this.props.addjobmodal}
                    <h1 className="about-header">Experience</h1>
                    {[...this.props.jobsArr].map((job) => {
                        const jobDescription = job.description ? <p className="job-description">{job.description}</p> : <br className="job-description-two"></br>;
                        if (job.user_id == this.props.userId)
                            // this.state.jobId = job.id; 
                            return (
                                <div className="job-container" key={job.id}>
                                    <img className='session-job-photo' src={
                                        job.photoUrl ?
                                            job.photoUrl :
                                            window.building} />
                                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                        <BsPencil
                                            className="edit-basicinfo-button"
                                            id={job.id}
                                            onClick={this.props.jobmodal}
                                        />
                                    </IconContext.Provider>
                                    {/* {this.props.jobmodal} */}
                                    <div className="job-info-container">
                                        <h1 className="job-title">{job.title}</h1>
                                        <p className="job-company">{job.company}</p>
                                        <p className="job-date">{job.start_date} - {job.end_date}</p>
                                        <p className="job-location">{job.location}</p>
                                        {jobDescription}
                                    </div>
                                    {job !== this.props.jobsArr[this.props.jobsArr.length - 1] ? <div className="job-divider"></div> : <div></div>}
                                </div>
                            );
                    })}
                    <div className="experience-divider"></div>
                    {this.props.addeducationmodal}
                    <h1 className="about-header">Education</h1>
                    {[...this.props.educationsArr].map((education) => {
                        const educationDescription = education.description ? <p className="job-description">{education.description}</p> : <br className="job-description-two"></br>;
                        if (education.user_id == this.props.userId)
                            return (
                                <div className="job-container" key={education.id}>
                                    <img className='session-job-photo' src={
                                        education.photoUrl ?
                                            education.photoUrl :
                                            window.graduation} />
                                    <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                                        <BsPencil
                                            className="edit-basicinfo-button"
                                            id={education.id}
                                            onClick={this.props.educationmodal}
                                        />
                                    </IconContext.Provider>
                                    <div className="job-info-container">
                                        <h1 className="job-title">{education.school}</h1>
                                        <p className="job-company">{education.degree}</p>
                                        <p className="job-location">{education.field}</p>
                                        <p className="job-date">{education.start_date} - {education.end_date}</p>
                                        {educationDescription}
                                    </div>
                                    {education !== this.props.educationsArr[this.props.educationsArr.length - 1] ? <div className="job-divider"></div> : <div></div>}
                                </div>
                            );
                    })}
                </div>
            </div >
        )
    }

}

export default UserExperienceInfo;