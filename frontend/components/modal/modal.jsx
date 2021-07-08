import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux'; 
import PostContainer from  '../../components/feed_page/post_container';
import EditModal from '../profile_page/edit_modal';
import EditJob from '../profile_page/job_modal';
import EditEducation from '../profile_page/education_modal';
import AddJob from '../profile_page/add_job_modal';
import AddEducation from '../profile_page/add_education_modal';
import ProPicContainer from '../profile_page/propic_modal';
import EditPostModal from '../../components/feed_page/edit_post_modal';

function Modal({ modal, closeModal, openModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'post':
            component = <PostContainer />;
            break;
        case 'editpost':
            component = <EditPostModal openModal={openModal}/>;
            break;
        case 'propic':
            component = <ProPicContainer />;
            break;
        case 'edit':
            component = <EditModal />;
            break;
        case 'job':
            component = <EditJob />;
            break;
        case 'education':
            component = <EditEducation />;
            break;
        case 'addjob':
            component = <AddJob />;
            break;
        case 'addeducation':
            component = <AddEducation />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal,
        ui: state.ui,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal()),
        openModal: (modal, postId) => dispatch(openModal(modal, postId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);