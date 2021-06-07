import React from 'react';
import { Link } from 'react-router-dom';

class ExperienceInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchAllJobs();
        this.props.currentjob.title;
        this.props.currentjob.company;
        this.props.currentjob.photoUrl;
        this.props.currentjob.start_date;
        this.props.currentjob.end_date;
        this.props.currentjob.location;
        this.props.currentjob.description;
        this.props.jobsArr;
    }


    render() {
        console.log(this.props);
        return (
            <div className="experience-box">
                <h1 className="about-header">Experience</h1>
                    {[...this.props.jobsArr].map((job) => {
                        // let jobDescription;
                        // if (job.description) {
                        //     jobDescription = (
                        //         <p className="job-description">{job.description}</p>
                        //     );
                        // }
                        const jobDescription = job.description ? <p className="job-description">{job.description}</p> : <br className="job-description-two"></br>;
                        if (job.user_id == this.props.currentuser.id) 
                        return (
                            <div className="job-container" key={job.id}>
                                <img className='session-job-photo' src={
                                    job.photoUrl ?
                                        job.photoUrl :
                                        window.dogo} />
                                <div className="job-info-container">
                                    <h1 className="job-title">{job.title}</h1>
                                    <p className="job-company">{job.company}</p>
                                    <p className="job-date">{job.start_date} - {job.end_date}</p>
                                    <p className="job-location">{job.location}</p>
                                    {jobDescription}
                                    {/* <p className="job-description">{job.description}</p> */}
                                </div>
                            </div>
                        );
                    })}
            </div>
        )
    }

}

export default ExperienceInfo;