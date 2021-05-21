import React from 'react';
import { Link } from 'react-router-dom';

class BasicInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.currentuser.title;
        this.props.currentuser.location;
        this.props.currentuser.description;
    }

    render() {
        let aboutDisplay; 
        if (this.props.currentuser.description) {
            aboutDisplay = (
                <div className="profile-box about">
                    <h1 className="about-header">About</h1>
                    <p className="session-profile-about">{this.props.currentuser.description}</p>
                </div>
            );
        }
        return (
            <div>
                <div className="profile-box">
                    {/* <div className="color-block"></div> */}
                    <img className='color-block' src={
                        this.props.currentuser.wall_photo ?
                            this.props.currentuser.wall_photo :
                            window.wallpic} />
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
                        {/* {aboutDisplay} */}
                </div>
                {aboutDisplay}
            </div>
        )

    }

}

export default BasicInfo;