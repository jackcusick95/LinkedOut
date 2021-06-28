import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaPortrait } from 'react-icons/fa';

class MyNetwork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchAllJobs();
        this.props.fetchAllPosts();
    }

    render() {
        console.log(this.props);
        return (
            <div className="jobs-container">
                <div className="jobs-navbar">
                </div>
                <div className="jobs-outer-container">
                    <div className="network-index-box">
                        <h1 className="network-about-header">See who's on LinkedOut!</h1>
                        {[...this.props.usersArr].map((user) => {
                            const userDescription = user.description ? <p className="job-description">{user.description}</p> : <br className="job-description-two"></br>;
                            return (
                                <div className="full-network-container">
                                    <div className="network-container" key={user.id}>
                                        <img className='session-network-photo' src={
                                            user.profile_photo ?
                                                user.profile_photo :
                                                window.dogo} />
                                        <div className="network-info-container">
                                            <h1 className="job-title">{user.fname} {user.lname}</h1>
                                            <p className="job-company">{user.title}</p>
                                            {/* <p className="job-date">User since: {user.created_at}</p> */}
                                            <p className="job-location">{user.location}</p>
                                            {/* {userDescription} */}
                                        </div>
                                        <div className="network-connect-button">
                                            <span className="nav-tooltip" >Feature coming soon!</span>
                                            <p>Connect</p>                                        
                                        </div>
                                    {user !== this.props.usersArr[this.props.usersArr.length - 1] ? <div className="job-divider"></div> : <div></div>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="jobs-profile-sidebar">
                        <img className='feed-faceshot' src={window.anotherface} />
                        <h1 className='feed-name'>Jack Cusick</h1>
                        <div className="feed-profilebox-icons">
                            <div className="nav-profile">
                                <div>
                                    <a href="https://www.linkedin.com/in/jack-cusick-2a5809b4/">
                                        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                            <FaLinkedin className="linkedin-nav-button" />
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

export default MyNetwork;