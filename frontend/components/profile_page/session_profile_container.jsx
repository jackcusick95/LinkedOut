import React from 'react';
import SessionProfilePage from './session_profile';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { IconContext } from "react-icons";
import { BsPencil } from 'react-icons/bs';
import { AiFillCamera } from 'react-icons/ai';
import { MdAdd } from 'react-icons/md';
import {fetchAllJobs, receive_job} from '../../actions/job_actions';
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
        // currentjob: state.entities.jobs[state.session.id],
        // currentjobs: sortJob,
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
        ),
        propicmodal: (
            <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                <AiFillCamera
                    className="edit-propic-button"
                    onClick={() => dispatch(openModal('propic'))}
                />
            </IconContext.Provider>
        ),
        jobmodal: (e) => {dispatch(openModal(`job:${e.target.id}`))},
        
        educationmodal: (e) => { dispatch(openModal(`education:${e.target.id}`)) },

        addjobmodal: (
            <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                <MdAdd
                    className="add-basicinfo-button"
                    onClick={() => dispatch(openModal('addjob'))}
                />
            </IconContext.Provider>
        ),
        addeducationmodal: (
            <IconContext.Provider value={{ style: { fontSize: '25px' } }}>
                <MdAdd
                    className="add-basicinfo-button"
                    onClick={() => dispatch(openModal('addeducation'))}
                />
            </IconContext.Provider>
        ),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionProfilePage);