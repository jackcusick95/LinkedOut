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
        this.state.clickedUser;
        this.props.usersArr; 
        this.props.jobsArr;
        this.props.educationsArr;
        this.props.userId;

    }

    render() {

        return (
            <div>
                <div className="profile-box">
                    {[...this.props.usersArr].map((user) => {
                        if (user.id == this.props.userId)
                            return (
                                <div>
                                    <img className='color-block' src={
                                        user.wall_photo ?
                                            user.wall_photo :
                                            window.wallpic} />
                                    <Link to={"/feed"}>
                                        <img className='session-profile-photo' src={
                                            user.profile_photo ?
                                                user.profile_photo :
                                                window.dogo} />
                                    </Link>
                                    <div className="probox-container">
                                        <div className="left-profile-box">
                                            <h1 className="session-profile-name">{user.fname} {user.lname}</h1>
                                            <p className="session-profile-title">{user.title}</p>
                                            <p className="session-profile-location">{user.location}</p>
                                        </div>
                                        <div className="right-profile-box">
                                            {[...this.props.jobsArr].filter((job) => job.user_id == this.props.userId).map((currentJob, idx) => {
                                                if (idx == 0)
                                                    return (
                                                        <div className="pro-ed-container" key={currentJob.id}>
                                                            <img className='ed-pro-photo' src={
                                                                currentJob.photoUrl ?
                                                                    currentJob.photoUrl :
                                                                    window.building} />
                                                            <p className="right-box-text">{currentJob.company}</p>
                                                        </div>
                                                    );
                                            })}
                                            {[...this.props.educationsArr].filter((education) => education.user_id == this.props.userId).map((currentEducation, idx) => {
                                                if (idx == 0)
                                                    return (
                                                        <div  className="pro-ed-container" key={currentEducation.id}>
                                                            <img className='ed-pro-photo' src={
                                                                currentEducation.photoUrl ?
                                                                    currentEducation.photoUrl :
                                                                    window.graduation} />
                                                            <p className="right-box-text">{currentEducation.school}</p>
                                                        </div>
                                                    );
                                            })}
                                        </div>
                                    </div>

                                </div>
                            );
                    })}
                </div>
                {[...this.props.usersArr].map((user) => {
                    if (user.id == this.props.userId && user.description)
                        return (
                            <div className="profile-box about">
                                <h1 className="about-header">About</h1>
                                <p className="session-profile-about">{user.description}</p>
                            </div>
                        );
                })}
            </div>
        )
    }
}

export default UserProfilePage;