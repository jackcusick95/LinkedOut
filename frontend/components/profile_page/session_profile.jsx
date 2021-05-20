

import React from 'react';
import { Link } from 'react-router-dom';
import BasicInfo from './basic_info'; 
import ExperienceInfo from './experience_info'; 


// Need to put the below logout button on the navbar when i get to it
class SessionProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }   

    render() {
        return (
            <div className="profile-container">
                <div className="main-container">

                <BasicInfo 
                    users={this.props.user}
                    currentuser={this.props.currentuser}
                    session={this.props.session}
                    editmodal={this.props.editmodal}
                />

                <ExperienceInfo 
                    jobs={this.props.jobs}
                />

                </div>
            </div>
        )
    }

}

export default SessionProfilePage;