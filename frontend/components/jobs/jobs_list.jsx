import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaPortrait } from 'react-icons/fa';

class JobsList extends React.Component {
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
                <div className="jobs-navbar">
                    {/* <div className="left-nav">
                        <Link to={"/"}>
                            <img className='jobs-homelogo' src={window.logo} />
                        </Link>
                        <div className="jobs-profilebox-icons"> */}
                            {/* <div className="nav-home">
                                <div>
                                    <a href="https://www.linkedin.com/in/jack-cusick-2a5809b4/">
                                        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                            <FaLinkedin className="home-nav-button" />
                                        </IconContext.Provider>
                                    </a>
                                </div>
                            </div> */}
                            {/* <div className="nav-profile">
                                <div>
                                    <a href="https://github.com/jackcusick95">
                                        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                            <FaGithub className="profile-nav-button" />
                                        </IconContext.Provider>
                                    </a>
                                </div>
                            </div> */}
                            {/* <div className="nav-signout">
                                <div>
                                    <a href="https://www.jackcusick95.com/">
                                        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                            <FaPortrait className="nav-logout" />
                                        </IconContext.Provider>
                                    </a>
                                </div>
                            </div> */}
                        {/* </div>
                    </div> */}
                    {/* <div className="jobs-buttons">
                        <Link id="joinnow" to="/signup">Join now</Link>
                        <Link id="signin" to="/login">Sign in</Link>
                    </div> */}
                </div>
                <div className="jobs-outer-container">
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
                    <div className="jobs-profile-sidebar">
                        <img className='feed-faceshot' src={window.anotherface} />
                        <h1 className='feed-name'>Jack Cusick</h1>
                        <div className="feed-profilebox-icons">
                            <div className="nav-home">
                                <div>
                                    <a href="https://www.linkedin.com/in/jack-cusick-2a5809b4/">
                                        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                            <FaLinkedin className="home-nav-button" />
                                        </IconContext.Provider>
                                        <p className="profile-text">LinkedIn</p>
                                    </a>
                                </div>
                            </div>
                            <div className="nav-profile">
                                <div>
                                    <a href="https://github.com/jackcusick95">
                                        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                            <FaGithub className="profile-nav-button" />
                                        </IconContext.Provider>
                                        <p className="profile-text">Github</p>
                                    </a>
                                </div>
                            </div>
                            <div className="nav-signout">
                                <div>
                                    <a href="https://www.jackcusick95.com/">
                                        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                            <FaPortrait className="nav-logout" />
                                        </IconContext.Provider>
                                        <p className="profile-text">Website</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default JobsList;