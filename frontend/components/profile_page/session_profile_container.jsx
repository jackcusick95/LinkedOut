import React from 'react';
import SessionProfilePage from './session_profile';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { IconContext } from "react-icons";
import { BsPencil } from 'react-icons/bs';
import {fetchAllJobs} from '../../actions/job_actions';
import {fetchAllEducations} from '../../actions/education_actions'; 



const mapStateToProps = (state) => {
    return {
        currentuser: state.entities.users[state.session.id],
        users: state.entities.users,
        session: state.session,
        jobs: state.entities.jobs,
        jobsArr: Object.values(state.entities.jobs), 
        educations: state.entities.educations,
        educationsArr: Object.values(state.entities.educations), 
        currentjob: state.entities.jobs[state.session.id],
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser()),
        closeModal: () => dispatch(closeModal()),
        openModal: () => dispatch(openModal()),
        fetchAllJobs: () => dispatch(fetchAllJobs()),
        fetchAllEducations: () => dispatch(fetchAllEducations()), 
        editmodal: (
            <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                <BsPencil
                    className="edit-basicinfo-button"
                    onClick={() => dispatch(openModal('edit'))}
                />
            </IconContext.Provider>
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionProfilePage);