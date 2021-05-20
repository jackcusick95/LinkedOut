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
                <Link to={"/feed"}>
                    <img className='nav-logo' src={window.logo} />
                </Link>
                <Link to={"/feed"}>
                    <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                        <ImHome3 className="home-nav-button"/> 
                    </IconContext.Provider>
                    <p className="nav-home">Home</p>
                </Link>
                <Link to={"/"}>
                    <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                        <RiLogoutCircleRFill className="nav-logout" onClick={this.props.logoutUser} />
                    </IconContext.Provider>
                    <p className="nav-signout">Sign out</p>
                </Link>

                <Link to={"/profile"}>
                    <IconContext.Provider value={{ style: { fontSize: '35px' } }}>
                        <GiBearFace className="profile-nav-button" />
                    </IconContext.Provider>
                    <p className="nav-profile">Profile</p>
                </Link>
                <div className="nav-right-text">
                    <p className="nav-quote-header">Daily Inspiration:</p>
                    <p className="nav-quote">“If I had asked people what they wanted, they would have said faster horses.”</p>
                    <p className="nav-quote"> ~ Henry Ford</p>
                </div>
            </div>
        </div >
        )
    }
}

export default NavBar; 