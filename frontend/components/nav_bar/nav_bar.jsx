import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { ImHome3 } from 'react-icons/im';
import { RiLogoutCircleRFill} from 'react-icons/ri';
import { GiBearFace } from 'react-icons/gi';
import { FaTrashAlt, FaRegCommentDots, FaLinkedin, FaGithub, FaPortrait } from 'react-icons/fa';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { IoMdArrowDropdown } from 'react-icons/io';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drop: false,
        }
        this.clicked = this.clicked.bind(this);
        this.leave = this.leave.bind(this);
    }

    clicked() {
        this.setState({ drop: true });
    }

    leave() {
        this.setState({ drop: false });
    }

    render() {
        console.log(this.state)
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
                            <button className="me-dropdown" onClick={this.clicked}>
                                <img className='navbar-photo' src={
                                    this.props.currentuser.profile_photo ?
                                        this.props.currentuser.profile_photo :
                                        window.dogo} />
                                        <div className="nav-drop-textalign">
                                            <p className="drop-nav-text">Me</p>
                                            <p className="li-icon"><IoMdArrowDropdown></IoMdArrowDropdown></p>
                                        </div>
                                <ul className={this.state.drop ? "showdrop" : "hidedrop"} onMouseLeave={this.leave}>
                                    <li className="nav-drop-top">
                                        <img className='navbar-drop-photo' src={
                                            this.props.currentuser.profile_photo ?
                                            this.props.currentuser.profile_photo :
                                            window.dogo} />
                                        <div className="nav-drop-info">
                                            <h1 className="nav-drop-name">{this.props.currentuser.fname} {this.props.currentuser.lname}</h1>
                                            <h1 className="nav-drop-title">{this.props.currentuser.title}</h1>
                                        </div>
                                    </li>
                                    <li className="nav-drop-li" onClick={this.leave} >
                                            <Link to={"/profile"}>
                                                <p>View Profile</p>
                                            </Link>
                                    </li>
                                    <li className="nav-drop-signout" onClick={this.props.logoutUser} >
                                        <Link to={'/'}>
                                            <p>Sign Out</p>
                                        </Link>
                                    </li>
                                </ul>
                            </button>
                        </div>
                </div>
            </div>
        </div >
        )
    }
}

export default NavBar; 