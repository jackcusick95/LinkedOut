import { connect } from 'react-redux';
// import React from 'react';
import Jobs from './jobs';
import { fetchAllJobs } from '../../actions/job_actions';

const mapStateToProps = (state) => {
    return {
        jobsArr: Object.values(state.entities.jobs),
        users: state.entities.users,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllJobs: () => dispatch(fetchAllJobs()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Jobs);