import React from 'react';
import { Link } from 'react-router-dom';

class BasicInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (

            <div className="profile-box">
                <div className="color-block"></div>
                    <Link to={"/feed"}>
                        <img className='session-profile-photo' src={
                            this.props.currentuser.profile_photo ?
                            this.props.currentuser.profile_photo :
                            window.dogo} />
                    </Link>
                    {this.props.editmodal}
                    <Link to={"/profile"}>
                        <h1 className="session-profile-name">{this.props.currentuser.fname} {this.props.currentuser.lname}</h1>
                    </Link>
                    <p className="session-profile-title">{this.props.currentuser.title}</p>
                    <p className="session-profile-location">{this.props.currentuser.location}</p>
            </div>

        )
    }

}

export default BasicInfo;