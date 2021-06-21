import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from "react-icons";
import { ImHome3 } from 'react-icons/im';
import { RiLogoutCircleRFill} from 'react-icons/ri';
import { GiBearFace } from 'react-icons/gi';

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