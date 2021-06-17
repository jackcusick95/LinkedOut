import { RECEIVE_ALL_EDUCATIONS, RECEIVE_EDUCATION, REMOVE_EDUCATION } from '../actions/education_actions';

const educationsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_EDUCATIONS:
            return action.payload.educations;
        case RECEIVE_EDUCATION:
            newState[action.education.id] = action.education;
            return newState;
        case REMOVE_EDUCATION:
            delete newState[action.educationId];
            return newState;
        default:
            return oldState;
    }
}

export default educationsReducer;