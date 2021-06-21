

import React from 'react';
import BasicInfo from './basic_info'; 
import ExperienceInfo from './experience_info'; 
import { IconContext } from "react-icons";
import { FaTrashAlt, FaRegCommentDots, FaLinkedin, FaGithub, FaPortrait } from 'react-icons/fa';


// Need to put the below logout button on the navbar when i get to it
class SessionProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }   


    render() {
        return (
            <div className="profile-container">
                <div className="profile-grid-container">
                    <div className="main-container">
                        <BasicInfo 
                            users={this.props.user}
                            currentuser={this.props.currentuser}
                            session={this.props.session}
                            editmodal={this.props.editmodal}
                        />

                        <ExperienceInfo 
                            jobsArr={this.props.jobsArr}
                            users={this.props.user}
                            fetchAllJobs={this.props.fetchAllJobs}
                            jobs={this.props.jobs}
                            currentuser={this.props.currentuser}
                            currentjob={this.props.currentjob}
                            fetchAllEducations={this.props.fetchAllEducations}
                            educationsArr={this.props.educationsArr}
                        />
                    </div>
                    <div className="news-sidebar">
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
                                            <FaPortrait className="nav-logout" onClick={this.props.logoutUser} />
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

export default SessionProfilePage;