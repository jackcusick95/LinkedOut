import React from 'react';
import EditJobItem from './job_modal';
import { IconContext } from "react-icons";
import EditJob from './job_modal';
import { BsPencil } from 'react-icons/bs';
import { openModal} from '../../actions/modal_actions';


class ExperienceInfo extends React.Component {
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


    render() {
        console.log(this.props);

        return (
            <div>
                <div className="experience-box">
                    {this.props.addjobmodal}
                    <h1 className="about-header">Experience</h1>
                        {[...this.props.jobsArr].map((job) => {
                            const jobDescription = job.description ? <p className="job-description">{job.description}</p> : <br className="job-description-two"></br>;
                            const currentjobArr = this.props.jobsArr.filter(job => job.user_id == this.props.currentuser.id);
                            if (job.user_id == this.props.currentuser.id)
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
                                    { job !== currentjobArr[currentjobArr.length - 1] ? <div className="job-divider"></div> : <div></div>}
                                </div>
                            );
                        })}
                    <div className="experience-divider"></div>
                    {this.props.addeducationmodal}
                    <h1 className="about-header">Education</h1>
                    {[...this.props.educationsArr].map((education) => {
                        const educationDescription = education.description ? <p className="job-description">{education.description}</p> : <br className="job-description-two"></br>;
                        const currenteducationArr = this.props.educationsArr.filter(education => education.user_id == this.props.currentuser.id);
                        if (education.user_id == this.props.currentuser.id)
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
                                    {education !== currenteducationArr[currenteducationArr.length - 1] ? <div className="job-divider"></div> : <div></div>}
                                </div>
                            );
                    })}
                </div>
            </div >
        )
    }

}

export default ExperienceInfo;