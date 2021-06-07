import React from 'react';

class ExperienceInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchAllJobs();
    }


    render() {
        console.log(this.props);
        return (
            <div className="experience-box">
                <h1 className="about-header">Experience</h1>
                    {[...this.props.jobsArr].map((job) => {
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
                                </div>
                            </div>
                        );
                    })}
            </div>
        )
    }

}

export default ExperienceInfo;