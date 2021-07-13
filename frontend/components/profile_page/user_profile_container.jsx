import React from 'react';
import UserProfilePage from './user_profile';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { IconContext } from "react-icons";
import { BsPencil } from 'react-icons/bs';
import { AiFillCamera } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';
import { fetchAllJobs, receive_job } from '../../actions/job_actions';
import { fetchAllEducations } from '../../actions/education_actions';
import { fetchAllPosts } from '../../actions/post_actions';




const mapStateToProps = (state) => {

    return {
        currentuser: state.entities.users[state.session.id],
        users: state.entities.users,
        session: state.session,
        jobs: state.entities.jobs,
        jobsArr: Object.values(state.entities.jobs),
        usersArr: Object.values(state.entities.users),
        educations: state.entities.educations,
        educationsArr: Object.values(state.entities.educations),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser()),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal()),
        fetchAllJobs: () => dispatch(fetchAllJobs()),
        fetchAllEducations: () => dispatch(fetchAllEducations()),
        fetchAllPosts: () => dispatch(fetchAllPosts()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);