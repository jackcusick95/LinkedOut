import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-container">
                <Link to={"/"}>
                    <button className="nav-logout" onClick={this.props.logoutUser}>Sign Out</button>
                </Link>
            </div>
        )
    }
}

export default NavBar; 