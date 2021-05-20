import React from 'react';
import { Link } from 'react-router-dom';

class ExperienceInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        console.log(this.props)
        return (
            <div className="experience-box">
                <h1>Experience</h1>
                {/* <h1>{this.props.currentjob.title}</h1> */}
            </div>
        )
    }

}

export default ExperienceInfo;