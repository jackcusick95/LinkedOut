import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { ImHome3 } from 'react-icons/im';
import { RiLogoutCircleRFill} from 'react-icons/ri';
import { GiBearFace } from 'react-icons/gi';
import { FaTrashAlt, FaRegCommentDots, FaLinkedin, FaGithub, FaPortrait } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-fixed">
            <div className="navbar-container">
                <div className="left-nav">
                    <Link to={"/feed"}>
                        <img className='nav-logo' src={window.logo} />
                    </Link>
                        <div className="nav-profilebox-icons">
                            <div className="nav-home">
                                <div>
                                    <a href="https://www.linkedin.com/in/jack-cusick-2a5809b4/">
                                        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                            <FaLinkedin className="home-nav-button" />
                                        </IconContext.Provider>
                                        {/* <p className="nav-text">LinkedIn</p> */}
                                    </a>
                                </div>
                            </div>
                            <div className="nav-profile">
                                <div>
                                    <a href="https://github.com/jackcusick95">
                                        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                            <FaGithub className="profile-nav-button" />
                                        </IconContext.Provider>
                                        {/* <p className="nav-text">Github</p> */}
                                    </a>
                                </div>
                            </div>
                            <div className="nav-signout">
                                <div>
                                    <a href="https://www.jackcusick95.com/">
                                        <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                            <FaPortrait className="nav-logout" />
                                        </IconContext.Provider>
                                        {/* <p className="nav-text">Website</p> */}
                                    </a>
                                </div>
                            </div>
                        </div>
                </div>
                    <div className="right-nav">
                        <div className="nav-home">
                            <Link to={"/feed"}>
                                <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                    <ImHome3 className="home-nav-button"/> 
                                </IconContext.Provider>
                                <p className="nav-text">Home</p>
                            </Link>
                        </div>
                        <div className="nav-home">
                            <Link to={"/jobslist"}>
                                <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                    <BsFillBriefcaseFill className="home-nav-button" />
                                </IconContext.Provider>
                                <p className="nav-text">Jobs</p>
                            </Link>
                        </div>
                        <div className="nav-profile">
                            <Link to={"/profile"}>
                                <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                    <GiBearFace className="profile-nav-button" />
                                </IconContext.Provider>
                                <p className="nav-text">Profile</p>
                            </Link>
                        </div>
                        <div className="nav-signout">
                            <Link to={"/"}>
                                <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                                    <RiLogoutCircleRFill className="nav-logout" onClick={this.props.logoutUser} />
                                </IconContext.Provider>
                                <p className="nav-text">Sign out</p>
                            </Link>
                        </div>
                </div>
            </div>
        </div >
        )
    }
}

export default NavBar; 