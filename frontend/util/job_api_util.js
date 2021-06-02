export const fetchAllJobs = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/jobs'
    });
}


export const createJob = (job) => {
    return $.ajax({
        method: 'POST',
        url: '/api/jobs',
        data: job
    });
}

export const updateJob = (job) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/jobs/${job.id}`,
        data: { job }
    });
}

export const deleteJob = (jobId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/jobs/${jobId}`
    });
}
