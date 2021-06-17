import * as APIUtil from '../util/education_api_util';

export const RECEIVE_ALL_EDUCATIONS = 'RECEIVE_ALL_EDUCATIONS';
export const RECEIVE_EDUCATION = 'RECEIVE_EDUCATION';
export const REMOVE_EDUCATION = 'REMOVE_EDUCATION';

const receiveAllEducations = (payload) => {
    return {
        type: RECEIVE_ALL_EDUCATIONS,
        payload
    }
}

const receiveEducation = (education) => {
    return {
        type: RECEIVE_EDUCATION,
        education
    }
}

const removeEducation = (educationId) => {
    return {
        type: REMOVE_EDUCATION,
        educationId
    }
}

export const fetchAllEducations = () => (dispatch) => {
    return APIUtil.fetchAllEducations()
        .then((payload) => dispatch(receiveAllEducations(payload)));
}

export const createEducation = (education) => (dispatch) => {
    return APIUtil.createEducation(education)
        .then((education) => dispatch(receiveEducation(education)));
}

export const updateEducation = (education) => (dispatch) => {
    return APIUtil.updateEducation(education)
        .then((education) => dispatch(receiveEducation(education)));
}

export const deleteEducation = (educationId) => (dispatch) => {
    return APIUtil.deleteEducation(educationId)
        .then(() => dispatch(removeEducation(educationId)));
}
