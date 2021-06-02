import React from 'react';
import { Link } from 'react-router-dom';

class ExperienceInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        this.props.fetchAllJobs();
        this.props.currentjob.title;
    }


    render() {
        console.log(this.props);
        return (
            <div className="experience-box">
                <h1 className="about-header">Experience</h1>
                <div className="job-container">
                    <img className='session-job-photo' src={
                        this.props.currentjob.photoUrl ?
                            this.props.currentjob.photoUrl :
                            window.dogo} />
                    <div className="job-info-container">
                        <h1>{this.props.currentjob.title}</h1>
                    </div>
                </div>
            </div>
        )
    }

}

export default ExperienceInfo;