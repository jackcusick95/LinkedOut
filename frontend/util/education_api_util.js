export const fetchAllEducations = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/educations'
    });
}


export const createEducation = (education) => {
    return $.ajax({
        method: 'POST',
        url: '/api/educations',
        data: education,
        contentType: false,
        processData: false
    });
}

export const updateEducation = (education) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/educations/${education.id}`,
        data: { education }
    });
}

export const deleteEducation = (EducationId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/educations/${EducationId}`
    });
}