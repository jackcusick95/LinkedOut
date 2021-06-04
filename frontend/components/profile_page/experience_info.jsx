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
        this.props.currentjob.company;
        this.props.currentjob.photoUrl;
        this.props.currentjob.start_date;
        this.props.currentjob.end_date;
        this.props.currentjob.location;
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
                        <h1 className="job-title">{this.props.currentjob.title}</h1>
                        <p className="job-company">{this.props.currentjob.company}</p>
                        <p className="job-date">{this.props.currentjob.start_date} - {this.props.currentjob.end_date}</p>
                        <p className="job-location">{this.props.currentjob.location}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default ExperienceInfo;