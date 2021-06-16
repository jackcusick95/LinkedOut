import React from 'react';
import { Link } from 'react-router-dom';

class Jobs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchAllJobs();
    }

    // getAlert(e) {
    //     e.preventDefault();
    //     alert("Coming soon!");
    // }

    render() {
        console.log(this.props);
        return (
            <div className="jobs-container">
                    <div className="left-nav">
                        <Link to={"/"}>
                            <img className='jobs-homelogo' src={window.logo} />
                        </Link>
                    </div>
                    <div className="jobs-buttons">
                        <Link id="joinnow" to="/signup">Join now</Link>
                        <Link id="signin" to="/login">Sign in</Link>
                    </div>
                <div className="jobs-index-box">
                    <h1 className="about-header">Jobs</h1>
                    {[...this.props.jobsArr].map((job) => {
                        const jobDescription = job.description ? <p className="job-description">{job.description}</p> : <br className="job-description-two"></br>;
                        return (
                            <div className="full-job-container">
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
                            </div> 
                            );
                    })}
                </div>
            </div>
        )
    }

}

export default Jobs;