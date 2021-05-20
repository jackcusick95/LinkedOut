import { RECEIVE_ALL_JOBS, RECEIVE_JOB, REMOVE_JOB } from '../actions/job_actions';

const jobsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = {...oldState}

    switch (action.type) {
        case RECEIVE_ALL_JOBS:
            return action.jobs;
        case RECEIVE_JOB:
            newState[action.job.id] = action.job;
            return newState;
        case REMOVE_JOB:
            delete newState[action.jobId];
            return newState; 
        default:
            return oldState;
    }
}

export default jobsReducer; 