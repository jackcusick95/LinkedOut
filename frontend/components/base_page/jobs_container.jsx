import { connect } from 'react-redux';
// import React from 'react';
import Jobs from './jobs';
import { fetchAllJobs } from '../../actions/job_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        jobsArr: Object.values(state.entities.jobs),
        users: state.entities.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllJobs: () => dispatch(fetchAllJobs()),
        openModal: () => dispatch(openModal()),
        openjobmodal: (e) => { dispatch(openModal(`openjob:${e.target.id}`)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);