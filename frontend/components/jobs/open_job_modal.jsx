import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';

class OpenJobItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.jobsArr.filter(
                job => job.id == this.props.jobId
            )[0],
        }
        // this.visitSite = this.visitSite.bind(this); 
    }

    componentDidMount() {
        this.props;
        this.state;
    }

    // visitSite(company) {
    //     let siteList = {
    //         Google: 'https://careers.google.com/',
    //         Twitter: 'https://careers.twitter.com/'
    //     }

    //     if (siteList[company]) {
    //         return (
    //             <div>
    //                 < a target = "_blank" rel = "noopener noreferrer" href = "https://www.linkedin.com/in/jack-cusick-2a5809b4/" ></a>
    //             </div>
    //         )
    //     }
    // }


    render() {
        const {
            company, description, title, location, start_date, end_date, photoUrl
        } = this.state;
        let siteList = {
            Google: 'https://careers.google.com/',
            Twitter: 'https://careers.twitter.com/',
            Tesla: 'https://www.tesla.com/careers',
            Starbucks: 'https://www.starbucks.com/careers/',
            Microsoft: 'https://careers.microsoft.com/us/en/',
        }
        console.log(this.props);
        console.log(this.state);
        return (

            <div className="modal-edit">
                <h2 className="modal-edit-header">Check out {company}'s job listing!</h2>
                <div onClick={this.props.closeModal} className="close-x">X</div>
                <div className="edit-modal-border">
                    <div className="job-container">
                        <img className='session-job-photo' src={
                            photoUrl ?
                                photoUrl :
                                window.dogo} />
                        <div className="job-info-container">
                            <h1 className="job-title">{title}</h1>
                            <p className="job-company">{company}</p>
                            <p className="job-date">{start_date} - {end_date}</p>
                            <p className="job-location">{location}</p>
                            <p className="job-description">{description}</p>
                        </div>
                    </div>
                </div>
                < a target="_blank" rel="noopener noreferrer" href={siteList[company]} >
                    <div className="modal-job-link">Visit Website</div>
                </a>
            </div>
        )
    }

}

const mapStateToProps = (state) => {

    return {
        currentuser: state.entities.users[state.session.id],
        users: state.entities.users,
        jobsArr: Object.values(state.entities.jobs),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),

    };
};

const OpenJobModal = connect(mapStateToProps, mapDispatchToProps)(OpenJobItem);

export default OpenJobModal;