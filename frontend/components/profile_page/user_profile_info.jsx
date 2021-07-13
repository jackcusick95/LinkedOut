import React from 'react';
import { Link } from 'react-router-dom';

class UserProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clickedUser: this.props.usersArr.filter(
                user => user.id == this.props.userId
            )[0],
        }
    }

    componentDidMount() {
        // this.props.fetchAllPosts();
        this.state.clickedUser.description;
        this.props.usersArr; 
        this.props.jobsArr;
        this.props.educationsArr;
        this.props.userId;

    }

    componentDidUpdate() {
        this.state.clickedUser;
        this.props.userId;
    }

    render() {
        let aboutDisplay;
        let clickedUser = (this.props.usersArr.filter(
            user => user.id == this.props.userId
        )[0]);
        
        if (this.state.clickedUser.description) {
            aboutDisplay = (
                <div className="profile-box about">
                    <h1 className="about-header">About</h1>
                    <p className="session-profile-about">{this.state.clickedUser.description}</p>
                </div>
            );
        }
        console.log(this.state); 
        return (
            <div>
                <div className="profile-box">
                    {/* <div className="color-block"></div> */}
                    <img className='color-block' src={
                        this.state.clickedUser.wall_photo ?
                            this.state.clickedUser.wall_photo :
                            window.wallpic} />
                    <Link to={"/feed"}>
                        <img className='session-profile-photo' src={
                            this.state.clickedUser.profile_photo ?
                                this.state.clickedUser.profile_photo :
                                window.dogo} />
                    </Link>
                    {/* {this.props.propicmodal} */}
                    {this.props.editmodal}
                    <div className="probox-container">
                        <div className="left-profile-box">
                            <Link to={"/profile"}>
                                <h1 className="session-profile-name">{this.state.clickedUser.fname} {this.state.clickedUser.lname}</h1>
                            </Link>
                            <p className="session-profile-title">{this.state.clickedUser.title}</p>
                            <p className="session-profile-location">{this.state.clickedUser.location}</p>
                        </div>
                        <div className="right-profile-box">
                            <p className="right-box-text">Facebook</p>
                            <p className="right-box-text">App Academy</p>
                        </div>
                    </div>
                </div>
                {aboutDisplay}
            </div>
        )

    }

}

export default UserProfilePage;