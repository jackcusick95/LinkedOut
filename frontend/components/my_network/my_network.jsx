import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { FaLinkedin, FaGithub, FaPortrait } from 'react-icons/fa';

class MyNetwork extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            connected: false,
        }
    this.handleConnection = this.handleConnection.bind(this); 
    this.removeConnection = this.removeConnection.bind(this); 
    }

    componentDidMount() {
        this.props.fetchAllJobs();
        this.props.fetchAllPosts();
        this.props.fetchAllConnections(); 
    }

    handleConnection(userId) {
        return (e) => {
                e.preventDefault();
            const newConnection = {
                connecter_id: this.props.currentuser.id,
                connected_id: userId,
            };

            this.props.createConnection(newConnection); 
        }
    }

    removeConnection(connectionObject) {
        return (e) => {
            e.preventDefault();

            const connectionId = connectionObject[0].id;

            this.props.deleteConnection(connectionId);
        }
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
                            console.log(user); 
                            const userDescription = user.description ? <p className="job-description">{user.description}</p> : <br className="job-description-two"></br>;
                            return (
                                <div className="full-network-container">
                                    <div className="network-container" key={user.id}>
                                        {user.id == this.props.currentuser.id ?
                                            <Link to={"/profile"}>
                                                <img className='session-network-photo' src={
                                                    user.profile_photo ?
                                                        user.profile_photo :
                                                        window.dogo} />
                                            </Link>
                                            : <Link to={`/userprofile/${user.id}`}>
                                                <img className='session-network-photo' src={
                                                    user.profile_photo ?
                                                        user.profile_photo :
                                                        window.dogo} />
                                            </Link>
                                        }
                                        <div className="network-info-container">
                                            {user.id == this.props.currentuser.id ?
                                                <Link to={"/profile"}>
                                                    <h1 className="job-title">{user.fname} {user.lname}</h1>
                                                </Link>
                                                : <Link to={`/userprofile/${user.id}`}>
                                                    <h1 className="job-title">{user.fname} {user.lname}</h1>
                                                </Link>
                                            }
                                            <p className="job-company">{user.title}</p>
                                            <p className="job-location">{user.location}</p>
                                        </div>
                                        {this.props.connectionsArr.filter((connection) => connection.connected_id == user.id && connection.connecter_id == this.props.currentuser.id).length > 0 ?
                                            < div className="network-connect-button" onClick={this.removeConnection(this.props.connectionsArr.filter((connection) => (connection.connected_id == user.id && connection.connecter_id == this.props.currentuser.id)))}>
                                                <p>Disonnect</p>
                                            </div>
                                            :
                                            <div className="lets-connect-button" onClick={this.handleConnection(user.id)}>
                                                <p>Connect</p>
                                            </div>
                                        }
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
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jack-cusick-2a5809b4/">
                                        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                            <FaLinkedin className="linkedin-nav-button" />
                                        </IconContext.Provider>
                                        <p className="profile-text">LinkedIn</p>
                                    </a>
                                </div>
                            </div>
                            <div className="nav-profile">
                                <div>
                                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/jackcusick95">
                                        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                            <FaGithub className="profile-nav-button" />
                                        </IconContext.Provider>
                                        <p className="profile-text">Github</p>
                                    </a>
                                </div>
                            </div>
                            <div className="nav-signout">
                                <div>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.jackcusick95.com/">
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