import * as APIUtil from '../util/job_api_util';

export const RECEIVE_ALL_JOBS = 'RECEIVE_ALL_JOBS';
export const RECEIVE_JOB = 'RECEIVE_JOB';
export const REMOVE_JOB = 'REMOVE_JOB';

const receiveAllJobs = (payload) => {
    return {
        type: RECEIVE_ALL_JOBS,
        payload
    }
}

export const receiveJob = (job) => {
    return {
        type: RECEIVE_JOB,
        job
    }
}

const removeJob = (jobId) => {
    return {
        type: REMOVE_JOB,
        jobId
    }
}

export const fetchAllJobs = () => (dispatch) => {
    return APIUtil.fetchAllJobs()
    .then((payload) => dispatch(receiveAllJobs(payload))); 
}

export const createJob = (job) => (dispatch) => {
    return APIUtil.createJob(job)
    .then((job) => dispatch(receiveJob(job)));
}

export const updateJob = (job) => (dispatch) => {
    return APIUtil.updateJob(job) 
    .then((job) => dispatch(receiveJob(job)));
}

export const deleteJob = (jobId) => (dispatch) => {
    return APIUtil.deleteJob(jobId)
    .then(() => dispatch(removeJob(jobId))); 
}
